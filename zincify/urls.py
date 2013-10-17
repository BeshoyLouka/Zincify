from django.conf import settings
from django.conf.urls import patterns, include, url
from django.conf.urls.defaults import *
from django.conf.urls.static import static

from tastypie.api import Api
from myAdmin.api.resources import WebPageResource


# Uncomment the next two lines to enable the admin:
from django.contrib import admin
admin.autodiscover()

entry_resource = WebPageResource()

urlpatterns = patterns('',
    # Examples:
    url(r'^$', 'fronts.views.home', name='home'),
    url(r'^myAdmin/', 'myAdmin.views.myAdmin', name='myAdmin'),
    # url(r'^zincify/', include('zincify.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
#    url(r'^admin/', include(admin.site.urls)),
    url(r'^api/', include(entry_resource.urls)),
)

urlpatterns += static(settings.MEDIA_URL,
	document_root=settings.MEDIA_ROOT)
