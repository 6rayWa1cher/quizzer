# Description

Backend. Allows for form and response creation and retrieval. Also manages discrod guild 

Contains several services communicating via rabbitmq:
- ```apps/forms-rest``` - service for communicating with clients via rest api. Forwards calls to other services via rabbitmq
- ```apps/forms-db``` - service responsible for communication with db and creation of forms and responses
- ```apps/forms-discord``` - service responsible for managing discord guild

Each service has it's own README with a bit more info

# Used technologies

- NodeJS
- NestJS
- RabbitMQ
- Postgres
- Prisma
- DiscordJS
- Swagger
- Lodash
