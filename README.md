# Zincify

> Full Backbone app on Django stack Boilerplate

## Getting Started
requirments `Grunt ~0.4.0` & `bower`

1. clone the repo
2. run `pip install -r requirements.txt` to install all requirments
3. run `npm install` in the main directory where the package.json is.
4. run `python manage.py syncdb` to sync the database
5. run `python manage.py runserver` to fire up the Django server
6. Congrats! you just got your server up stacked with the following:
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
`grunt build`

#### Update bootstrap or font-awesome Packages through power of bower
update deps like you usually do through `bower` and then make sure to run `grunt update` to copy the right __less & font__ files to their proper directories inside __app/styles__

#### Credits
- Inspired by [yeoman/backbone-generator](https://github.com/yeoman/generator-backbone)
