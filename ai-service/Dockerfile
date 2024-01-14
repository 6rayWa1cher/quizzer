FROM python:3.11
RUN mkdir -p /app
WORKDIR /app
COPY ./ai /app/ai
COPY ./exchange /app/exchange
COPY ./run.py /app/run.py
COPY ./requirements.txt /app/requirements.txt
RUN pip install --no-cache-dir --upgrade -r /app/requirements.txt

ARG AI_RABBIT_HOST=amqp://localhost:5672
ENV AI_RABBIT_HOST=${AI_RABBIT_HOST}

ARG AI_SERVICE_DO_MOCK=True
ENV AI_SERVICE_DO_MOCK=${AI_SERVICE_DO_MOCK}

CMD ["python", "run.py"]