""" Основной скрипт запуска сервиса. """

import time
import os

from exchange.rabbit import RabbitReceiver
from ai.generators import PollGenerator

def main() -> None:
    """ Основная функция. """
    do_mock: bool = bool(os.environ.get('AI_SERVICE_DO_MOCK') == 'true')
    rabbit_host: str = os.environ.get('AI_RABBIT_HOST')

    print("do_mock", do_mock)
    print("rabbit_host: ", rabbit_host, flush=True)

    poll_generator: PollGenerator = PollGenerator(do_mock)

    receiver: RabbitReceiver | None = None
    for i in range(10):
        try:
            receiver = RabbitReceiver(poll_generator, rabbit_host)
            break
        except Exception as e:
            print(f"can't connect to RabbitMQ (attempt {i})", e)
            print("waiting 5 seconds...", flush=True)
            time.sleep(5)
    if receiver is None:
        print("exiting", flush=True)
        return

    print("Created receiver", flush=True)
    receiver.start_receiving()

if __name__ == "__main__":
    main()
