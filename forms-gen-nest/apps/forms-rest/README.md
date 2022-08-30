# Description

Service for communicating with clients via rest api

Allows to get or create forms and responses for them

More info on endpoints and dtos on swagger at /api endpoint

Contains sse for notifying about created forms

AMQP_URL, PORT and HOST should be passed as env variable

# Used technologies

- NodeJS
- NestJS
- RabbitMQ
- Swagger

# Events

## Rabbitmq eventsa

### Exchange: SHARED_FORMS

Incoming
- 'form.created'

Outgoing
- 'form.response.get_all'
- 'form.response.post'
- 'form.get_by_id'
- 'form.get_all'
- 'form.post'

## Server sent events

### /sse

- 'form.created'
    - Data: FormDescriptionShortDto

## Event emitter

- 'sse.forward'
    - Data: SseForwardEvent
    - Sends data object via sse to client
