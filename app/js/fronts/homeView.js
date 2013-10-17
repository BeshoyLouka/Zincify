define ([
        "jquery",
        "underscore",
        "backbone",
        "bootstrap",
    ], function ($,_,Backbone) {
        var starter = Backbone.View.extend({
            initialize: function(){
                console.log('home view started...');
            }
        });
        var starterView = new starter();
    });
