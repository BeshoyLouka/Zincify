define ([
        "jquery",
        "underscore",
        "backbone",
        "Admin/webpages/webPagesCollection",
        "text!Admin/webpages/templates/push.html",
        "text!Admin/webpages/templates/list.html"
    ], function($,_,Backbone,WebPagesCollection,WebPagePushTemplate,WebPagesListTemplate){

            var Page = Backbone.View.extend({

                    el: '.container',

                    listTemplate: _.template(WebPagesListTemplate),

                    newTemplate: _.template(WebPagePushTemplate),

                    editTemplate: _.template(WebPagePushTemplate),

                    initialize: function (){
                        console.log('page view rendered');
                    },

                    editPage: function(){
                        this.$el.html(this.editTemplate());
                    },

                    listPages: function(){
                      this.collection = new WebPagesCollection();
                      this.$el.html(this.listTemplate);
                    }


            });

            var page = new Page();
            return page;
    });
