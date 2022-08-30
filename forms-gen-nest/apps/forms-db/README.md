# Description

Service responsible for database managment using prisma

Model description can be found at ../../database/prisma-forms/schema.prisma

AMQP_URL and DATABASE_URL should be passed as env variable


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
- 'form.response.get_all'
- 'form.response.post'
- 'form.get_by_id'
- 'form.get_all'
- 'form.post'

Outgoing
- 'form.created'
- 'form.response.created'
