define ([
        "jquery",
        "underscore",
        "backbone",
        "Admin/webpages/views"
    ], function($,_,Backbone,WebPagesViews){
            var Routes = Backbone.Router.extend({
                routes: {
                    "": "home",
                    "myAdmin/": "myAdmin",
                    "myAdmin/pages": "listPages"
                },

                myAdmin: function() {
                    console.log('router is listening to "myAdmin"');
                },

                listPages: function() {
                    WebPagesViews.listPages();
                },

                home: function(){
                    console.log('router is listening to "home"');
                }
            });

            var myRoutes = new Routes();
    });
