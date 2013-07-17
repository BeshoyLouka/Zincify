define [
        "jquery"
        "underscore"
        "backbone"
    ],
    ($,_,Backbone) ->
            class starter extends Backbone.View
                initialize: ->
                    console.log('app started...');
            starterView = new starter
