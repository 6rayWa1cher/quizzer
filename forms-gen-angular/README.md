# Description

Frontend. Pretty strait forward. Contains several related modules. Two seperate mods can be found editor and seperate page for filling forms.

Five distinct endpoints used to communicate with database, their description can be found in backend project

Listens to sse for created forms


# Used technologies

- Angular used as frontend framework
- Styles and many components take from Angular Material
- Axios for http

# How to run

## With node

For prod version:

From root
- ```npm i```
- ```npm run build```
- ```npm start```

For dev version:

From root
- ```npm i```
- ```npm run start:dev```

# How to work with it

There are to distinct pages. 
One is home editor page, awailable at / route.
It allows preview of all existing forms, shows responses for each one and allows creation of new forms

Page at /form/:id allows filling single form. Complete url for each form can be found in editor.
