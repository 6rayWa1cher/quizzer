# Description

Backend. Allows for form and response creation and retrieval. Also manages discrod guild 

Contains several services communicating via rabbitmq:
- [forms-gen-nest/apps/forms-rest](./apps/forms-rest/README.md) - service for communicating with clients via rest api. Forwards calls to other services via rabbitmq
- [forms-gen-nest/apps/forms-db](./apps/forms-db/README.md) - service responsible for communication with db and creation of forms and responses
- [forms-gen-nest/apps/forms-discord](./apps/forms-discord/README.md) - service responsible for managing discord guild

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
