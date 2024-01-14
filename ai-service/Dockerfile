FROM python:3.11
RUN mkdir -p /app
WORKDIR /app
COPY ./ai /app/ai
COPY ./exchange /app/exchange
COPY ./run.py /app/run.py
COPY ./requirements.txt /app/requirements.txt
RUN pip install --no-cache-dir --upgrade -r /app/requirements.txt

CMD ["python", "run.py"]