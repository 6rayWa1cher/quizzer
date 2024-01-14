""" Основной скрипт запуска сервиса. """

import os

from exchange.rabbit import RabbitReceiver
from ai.generators import PollGenerator

def main() -> None:
    """ Основная функция. """
    do_mock: bool = bool(os.environ.get('AI_SERVICE_DO_MOCK'))
    rabbit_host: str = os.environ.get('AI_RABBIT_HOST')

    poll_generator: PollGenerator = PollGenerator(do_mock)

    receiver: RabbitReceiver = RabbitReceiver(poll_generator, rabbit_host)

    receiver.start_receiving()

if __name__ == "__main__":
    main()
