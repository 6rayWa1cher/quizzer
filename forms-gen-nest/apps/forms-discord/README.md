# Description

Service responsible for managing discord server

Creats new channel under notification category on discord guild for each form

Sends message to corresponding channel for each forms' response

AMQP_URL should be passed as env variable

Discord api token should be passed as discord_bot.ts file in ./config


# Used technologies

- NodeJS
- NestJS
- RabbitMQ
- Postgres
- Prisma
- Lodash

# Events

## Rabbitmq eventsa

### Exchange: SHARED_FORMS

Incoming
- 'form.created'
- 'form.response.created'
