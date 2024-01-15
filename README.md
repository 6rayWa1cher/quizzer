#  quizzer
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
## About

Learning project for generating quizzes with LLaMA-2-13B LLM model

This is cut version of google forms

Workflow:
- User can create forms on the editor page
    - Each form assigned unique url
    - For each created form discord text channel created
- Forms can be filled in an editor or on separate page, unique for each form
    - For each submitted response, message sent to corresponding discord channel
- User can look at submitted responses on the editor page
- User can request an AI generated quiz with custom prompt and question count

Project broken into several pieces:
- [forms-gen-nest](./forms-gen-nest) - backend. It is broken into multiple microservices communicating via RabbitMQ
    - [forms-gen-nest/apps/forms-rest](./forms-gen-nest/apps/forms-rest) - service for communicating with clients via rest api. Forwards calls to other services via RabbitMQ
    - [forms-gen-nest/apps/forms-db](./forms-gen-nest/apps/forms-db) - service responsible for communication with db and creation of forms and responses
- [forms-gen-angular](./forms-gen-angular) - frontend. Pretty straight forward
- [ai-service](./ai-service/) - AI service

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
- Python
- Transformers

### Frontend:
- Angular
- Angular Material UI
- Axios

### Deployment:
- Docker Compose
- Ansible

# How to run

## For dev

### Using docker compose:
- ```npm run docker:up```

Backend available at ```localhost:3000```

Frontend available at ```localhost:4200```

Swagger available at ```localhost:3000/api```

Postgres available at ```localhost:5432```

RabbitMQ management available at ```localhost:15672```

Backend and frontend launched in hot reload mode, so all changes to codebase will be applied shortly after saving

### Without docker compose

I haven't done that but you could try running several ```npm run start*:dev``` for each service. Don't forget to start RabbitMQ and postgres and pass proper settings.

## For prod

We tested it on Ubuntu 20.04 with Nvidia Tesla T100

- Setup your Ansible inventory in [deployment](./deployment/) folder
- Run `make deploy-all`

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

### Separate page for filling forms

![Alt text](screenshots/fill_form_page.jpg?raw=true "Separate page for filling forms")

# Ways to improve

- Updating forms (questionable). What to do with responses then? Delete?
- Since forms rarely changed, caching can be added, reducing number of requests to db service
- Authentication service
- Parallelize answer generation

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Alstrasz"><img src="https://avatars.githubusercontent.com/u/47223797?v=4?s=100" width="100px;" alt="Andrew Lutsai"/><br /><sub><b>Andrew Lutsai</b></sub></a><br /><a href="https://github.com/6rayWa1cher/quizzer/commits?author=Alstrasz" title="Code">💻</a></td>

      <td align="center" valign="top" width="14.28%"><a href="https://github.com/6rayWa1cher"><img src="https://avatars.githubusercontent.com/u/27364356?v=4?s=100" width="100px;" alt="Konstantin Grigorev"/><br /><sub><b>Konstantin Grigorev</b></sub></a><br /><a href="https://github.com/6rayWa1cher/quizzer/commits?author=6rayWa1cher" title="Code">💻</a> <a href="#projectManagement-6rayWa1cher" title="Project Management">📆</a></td>

      <td align="center" valign="top" width="14.28%"><a href="https://github.com/baranovatm"><img src="https://avatars.githubusercontent.com/u/56389893?v=4?s=100" width="100px;" alt="Tatiana"/><br /><sub><b>Tatiana</b></sub></a><br /><a href="https://github.com/6rayWa1cher/quizzer/commits?author=baranovatm" title="Code">💻</a> <a href="#design-baranovatm" title="Design">🎨</a></td>

      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Throder-TVRS"><img src="https://avatars.githubusercontent.com/u/53103607?v=4?s=100" width="100px;" alt="Nikita Fomin"/><br /><sub><b>Nikita Fomin</b></sub></a><br /><a href="https://github.com/6rayWa1cher/quizzer/commits?author=Throder-TVRS" title="Code">💻</a> <a href="#research-Throder-TVRS" title="Research">🔬</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!