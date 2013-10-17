define ([
        "jquery",
        "underscore",
        "backbone"
    ], function($,_,Backbone){

            var webPage = Backbone.Model.extend({
                urlRoot: '/api/WebPage/',
                defaults: {
                    display_name: 'This is the Display Name',
                    alt_name: 'This is the Alt Name',
                    title: 'Zincify.com | Software Engineering Company',
                    seo_keywords: 'Consultant Company, Zincify, Softwares, websites',
                    headline: 'Headline goes here!',
                    default_template: 'article_and_sidebar',
//                    hero_image: '',
                    url_name: 'default',
                    article: 'Article Body Goes Here.'
                }
            });

            return webPage;

    });
