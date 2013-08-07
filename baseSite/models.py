from django.db import models

# Generic Web Page Model
class WebPage(models.Model):
    title = models.CharField(max_length=200)
    url_name = models.URLField(max_length=200)
    display_name = models.CharField(max_length=200)
    alt_name = models.CharField(max_length=200)
    seo_keywords = models.CharField(max_length=200)
    headline = models.CharField(max_length=200)
    article = models.CharField(max_length=200)
    hero_image = models.ImageField(upload_to="assets")
    default_template = models.BooleanField()

    def __unicode__(self):
        return self.display_name

# Navigation Main Model
class Navigation(models.Model):
    display_name = models.CharField(max_length=200)
    show_in_footer = models.BooleanField()
    show_in_header = models.BooleanField()
    external_link = models.BooleanField()
    icon = models.CharField(max_length=200)
    show_icon = models.BooleanField()
    show_display_name = models.BooleanField()
    href = models.URLField(max_length=200)
    associate_page = models.ForeignKey(WebPage)

    def __unicode__(self):
        return self.display_name
