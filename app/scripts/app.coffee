define [
        "jquery"
        "underscore"
        "backbone"
        "router"
    ],
    ($,_,Backbone,router) ->
        fireUp = Backbone.Views.extend ->
            initialize: ->
                ##console.log('App started')
                Backbone.history.start();
        fireUp
