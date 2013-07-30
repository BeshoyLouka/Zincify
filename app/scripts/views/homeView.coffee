define [
        "jquery"
        "underscore"
        "backbone"
    ],
    ($,_,Backbone) ->
            class starter extends Backbone.View
                initialize: ->
                    console.log('home view started...');
            starterView = new starter
