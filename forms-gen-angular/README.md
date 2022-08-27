# Description

This is a smiple project to pass entry test. It provides simpe version of google forms.

Description can be found at https://docs.google.com/document/d/1thnUjX5iTPWBwWXx0y-7rEN5Yw9glGC6U5_OIVL0MiM/edit?usp=sharing

Related projects: https://github.com/Alstrasz/forms-editor-nest

# Used technologies

- Angular used as frontend framework

- Styles and many components take from Angular Material

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
- ```npm run start:watch```

# How to work with it

There are to distinct pages. 
One is home editor page, awailable at / route.
It allows preview of all existing forms, shows responses for each one and allows creation of new forms

Other route allows filling single form. It is awailable at /form/:id route. Complete url for each form can be found in editor.

Five distinct endpoints used to communicate with database, their description can be found in backend project on github