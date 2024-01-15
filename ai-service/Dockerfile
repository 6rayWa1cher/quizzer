FROM python:3.11
RUN mkdir -p /app
WORKDIR /app
COPY ./requirements.txt /app/requirements.txt
RUN pip install --no-cache-dir --upgrade -r /app/requirements.txt
RUN pip install auto-gptq --extra-index-url https://huggingface.github.io/autogptq-index/whl/cu118/
COPY ./ai /app/ai
COPY ./exchange /app/exchange
COPY ./run.py /app/run.py


CMD ["python", "run.py"]