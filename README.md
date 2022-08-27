# Description

Learning project for getting familiar with microservises.

This is cut version of google forms

Workflow: 
- User can create forms on the editor page
- After form creation, user can share form's url with other ppl
- User can look at submitted responses on the editor page
- Forms can be filled in an editor or on separate page, unique for each form
- For each created form discord text channel created
- For each submitted response, message sent to corresponding channel 

Project broken into several pieces:
- ```forms-gen-nest/apps/forms-rest``` - service for communicating with clients via rest api. Forwards calls to other services via rabbitmq
- ```forms-gen-nest/apps/forms-db``` - service responsible for communication with db and creation of forms and responses
- ```forms-gen-nest/apps/forms-discord``` - service responsible for managing discord server
- ```forms-gen-angular``` - frontend. Pretty strait forward

# Used technologies

## Backend:
- NodeJS
- NestJS
- RabbitMQ
- Postgres
- Prisma
- DiscordJS
- Swagger

## Frontend:
- Angular
- Angular Material UI

# How to run

## For dev

### Using docker compose:
- ```docker-compose up```

Backend available at ```localhost:3000```

Frontend available at ```localhost:4200```

Swagger available at ```localhost:3000/api```

Postgres available at ```localhost:5432```

RabbitMQ managment available at ```localhost:15672```

### Without docker compose

I haven't done that but you could try running several ```npm run start*:dev``` for each service. Dont forget to start rabbitmq and postgres and pass proper setting.

## For prod

Not yet