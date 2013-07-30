# Full Backbone app on Django

> Full stack boilerplate

## Getting Started
requirments `Grunt ~0.4.0`

1. clone the repo
2. run `pip install -r requirements.txt` to install all requirments
3. run `python manage.py runserver` to fire up the Django server
4. Congrats! you just got your server up.

image

## Grunt Tasks
#### Compile coffeescript files
`grunt coffee`

#### Compile the Less files
`grunt less`

#### Build your *static* directory from the *app* directory
`grunt`

## Update bootstrap or font-awesome Packages theough `bower`
make sure to run `grunt update` to copy the right *less & font* files to their proper directories inside *app/styles*
