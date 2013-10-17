define ([
        "jquery",
        "underscore",
        "backbone",
        "Admin/webPages/webPage"
    ], function($,_,Backbone,WebPage){

            var webPagesCollection = Backbone.Collection.extend({
                model: WebPage
            });

            return webPagesCollection;

    });
