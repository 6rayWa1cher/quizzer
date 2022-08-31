#  forms-gen-microservices
## About

Learning project for getting familiar with microservices.

This is cut version of google forms

Workflow: 
- User can create forms on the editor page
    - Each form assigned unique url
    - For each created form discord text channel created
- Forms can be filled in an editor or on separate page, unique for each form
    - For each submitted response, message sent to corresponding discord channel 
- User can look at submitted responses on the editor page

Project broken into several pieces:
- [forms-gen-nest](./forms-gen-nest) - backend. It is broken into multiple microservices communicating via rabbitmq
    - [forms-gen-nest/apps/forms-rest](./forms-gen-nest/apps/forms-rest) - service for communicating with clients via rest api. Forwards calls to other services via rabbitmq
    - [forms-gen-nest/apps/forms-db](./forms-gen-nest/apps/forms-db) - service responsible for communication with db and creation of forms and responses
    - [forms-gen-nest/apps/forms-discord](./forms-gen-nest/apps/forms-discord) - service responsible for managing discord guild
- [forms-gen-angular](./forms-gen-angular) - frontend. Pretty strait forward

Each service has it's own README with a bit more info

# Used technologies

### Backend:
- NodeJS
- NestJS
- RabbitMQ
- Postgres
- Prisma
- DiscordJS
- Swagger
- Lodash

### Frontend:
- Angular
- Angular Material UI
- Axios

# How to run

## For dev

### Using docker compose:
- ```docker-compose up```

Backend available at ```localhost:3000```

Frontend available at ```localhost:4200```

Swagger available at ```localhost:3000/api```

Postgres available at ```localhost:5432```

RabbitMQ managment available at ```localhost:15672```

Backend and frontend launched in hot realod mode, so all changes to codebase will be applied shortly after saving

### Without docker compose

I haven't done that but you could try running several ```npm run start*:dev``` for each service. Dont forget to start rabbitmq and postgres and pass proper settings.

## For prod

- ```sudo docker-compose -f ./docker-compose.prod.yml up```

You can consider adjusting some env variables to suit your needs

# Ui screenshots

### Editor - starting page

![Alt text](screenshots/editor_starting_screen.jpg?raw=true "Editor - starting page")

### Editor - form preview

![Alt text](screenshots/editor_form_preview.jpg?raw=true "Editor - form preview")

### Editor - form creation

![Alt text](screenshots/editor_form_creation.jpg?raw=true "Editor - form creation")

### Editor - response viewer

![Alt text](screenshots/editor_response_view.jpg?raw=true "Editor - response viewer")

### Seperate page for filling forms

![Alt text](screenshots/fill_form_page.jpg?raw=true "Seperate page for filling forms")

# Ways to improve

- Deleting forms
- Updating forms (questinable). What to do with responses then? Delete? 
- Since forms rarely changed, caching can be added, reducing number of requests to db service
- Authentication service
