# Full Backbone app on Django and Tastypie

> Full stack boilerplate with Backbone Router, Views and Models that interacts with Tastypi api

## Getting Started
requirements `Grunt ~0.4.0` & `bower`

1. clone the repo
2. run `pip install -r requirements.txt` to install all requirments
3. run `python manage.py syncdb` to get a default.db file synced with models
4. run `python manage.py runserver` to fire up the Django server
5. Congrats! you just got your server up stacked with the following:
  - HTML5 Boilerplate
  - jQuery
  - Backbone.js (Models, Views and Routers)
  - Underscore.js
  - RequireJS
  - Twitter Bootstrap 3
  - Font Awesome
  - Django
  - Tastypie

## What is Next?
- this sample project comes with few django apps installed (please feel free to remove/add any of this):
  - `zincify` which is the main django app that contains the main url.py
  - `myAdmin` which is a sample backbone based app that communicates end-to-end through backbone-django synced Models and tastypie
  - `fronts` which meant to be the .com face of the project.
- navigate to `localhost:8000` and you will see the homepage template running (configured through Django urls)
- navigate to `localhost:8000/myAdmin` to see the first Route made by backbone.

#### What files to edit ?
- edit the `app` files and run `grunt static` to get a clean fresh __static__ directory for your django project.

## Grunt Tasks

#### Compile the Less files (with recess)
`grunt recess`

#### Build your __static__ directory from the __app__ directory
`grunt build` or `grunt static`

## Update font-awesome fonts
update Font-awesome through `bower` and then make sure to run `grunt update` to copy the right __font__ files to their proper directories inside __app/font__ so grunt can pick them up next time you run `grunt static`

## TODO
- Need better Documentation.
- Add a Javascript testing framework
- more...
