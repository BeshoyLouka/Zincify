from tastypie.resources import ModelResource
from tastypie.authorization import Authorization
from myAdmin.models import WebPage


class WebPageResource(ModelResource):
    class Meta:
        queryset = WebPage.objects.all()
        resource_name = 'WebPage'
        allowed_methods = ['get', 'post', 'put']
        authorization = Authorization()
