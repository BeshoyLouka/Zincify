# Production settings
import os

from base import *

DEBUG = True
TEMPLATE_DEBUG = DEBUG

# Heroku settings

# Parse database configuration from $DATABASE_URL
import dj_database_url
DATABASES['default'] =  dj_database_url.config()
DATABASES = {'default': dj_database_url.config(default='postgres://jugdikkqqfnkif:CLQu_JHb7ALIL3n8-gRmotATzk@ec2-54-227-238-21.compute-1.amazonaws.com:5432/ddrleks0vqlr8h')}


# Honor the 'X-Forwarded-Proto' header for request.is_secure()
SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')

# Allow all host headers
ALLOWED_HOSTS = ['*']

# Static asset configuration
import os
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
STATIC_ROOT = 'staticfiles'
STATIC_URL = '/static/'

STATICFILES_DIRS = (
    os.path.join(BASE_DIR, '../static'),
)
