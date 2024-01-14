""" Файл, содержащий классы, позволяющие обмениваться
сообщениями с другими сервисами посредством RabbitMQ. """

from typing import List, Dict
import json

import pika

from ai.generators import PollGenerator


class RabbitSender:
    """ Класс отправки сообщений в RabbitMQ. """

    def __init__(self,
                 connection: pika.BlockingConnection | None = None,
                 rabbit_host: str = "localhost"):
        if connection is None:
            self.connection = pika.BlockingConnection(pika.ConnectionParameters(host=rabbit_host))
        else:
            self.connection = connection

        self.channel = self.connection.channel()

    def generation_rabbit_update(self,
                                 rabbit_id: str,
                                 questions_done: int,
                                 questions_count: int) -> None:
        """ Отправляет в очередь сообщение об обновлении статуса генерации вопросов. """

        message = {
            "id": rabbit_id,
            "questions_done": questions_done,
            "questions_count": questions_count
        }

        print("gen_rab_upd", json.dumps(message), flush=True)
        self.channel.basic_publish(exchange="SHARED_FORMS",
                            routing_key="form.generation.update",
                            body=json.dumps(message),
                            properties=pika.BasicProperties(
                                delivery_mode=pika.DeliveryMode.Persistent
                                ))

    def generation_rabbit_complete(self, rabbit_id: str, questions: List[Dict]) -> None:
        """ Отправляет в очередь сообщение, содержащее результат генерации опроса. """

        message = {
            "id": rabbit_id,
            "questions": questions
        }

        print("gen_rab_comp", json.dumps(message), flush=True)
        self.channel.basic_publish(exchange="SHARED_FORMS",
                                   routing_key="form.generation.complete",
                                   body=json.dumps(message),
                                   properties=pika.BasicProperties(
                                       delivery_mode=pika.DeliveryMode.Persistent
                                       ))


class RabbitReceiver:
    """ Класс получения сообщений от RabbitMQ. """

    def __init__(self, poll_generator: PollGenerator, rabbit_host: str):
        parameters = pika.URLParameters(rabbit_host)
        self.connection = pika.BlockingConnection(parameters)
        self.channel = self.connection.channel()

        self.rabbit_sender = RabbitSender(connection=self.connection, rabbit_host=rabbit_host)

        self.channel.exchange_declare(exchange='SHARED_FORMS',
                                      exchange_type='topic',
                                      durable=True,
                                      auto_delete=False)

        self.channel.queue_declare(queue='ai-service:ai.generate', durable=True)

        self.channel.queue_bind(queue='ai-service:ai.generate',
                                exchange='SHARED_FORMS',
                                routing_key='ai.generate')

        self.poll_generator = poll_generator


    def start_receiving(self):
        """ Начинает процесс получения сообщений. """

        def callback(ch, method, properties, body):
            msg_raw = body.decode()
            print("ai.gen recv", msg_raw, flush=True)
            msg = json.loads(msg_raw)
            print("ai.gen recv", msg, flush=True)

            questions = self.poll_generator.generate_poll(msg["prompt"],
                                                          msg["questions_count"],
                                                          rabbit_id=msg["id"],
                                                          rabbit_sender=self.rabbit_sender)
            self.rabbit_sender.generation_rabbit_complete(msg["id"], questions)

            ch.basic_ack(delivery_tag=method.delivery_tag)

        self.channel.basic_qos(prefetch_count=1)
        self.channel.basic_consume(queue="ai-service:ai.generate", on_message_callback=callback)

        print(' [*] Waiting for messages. To exit press CTRL+C')
        self.channel.start_consuming()
