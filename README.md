# Full Backbone app on Django

> Full stack boilerplate

## Getting Started
requirments `Grunt ~0.4.0` & `bower`

1. clone the repo
2. run `pip install -r requirements.txt` to install all requirments
3. run `npm install` in the main directory where the package.json is.
4. run `python manage.py runserver` to fire up the Django server
5. Congrats! you just got your server up stacked with the following:
  - HTML5 Boilerplate
  - jQuery
  - Backbone.js
  - Underscore.js
  - RequireJS
  - Twitter Bootstrap 3
  - Font Awesome
  - Django 

## Grunt Tasks

#### Compile coffeescript files
`grunt coffee`

#### Compile the Less files
`grunt less`

#### Build your __static__ directory from the __app__ directory
`grunt`

## Update bootstrap or font-awesome Packages through
`bower` and then make sure to run `grunt update` to copy the right __less & font__ files to their proper directories inside __app/styles__
