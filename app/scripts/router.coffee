define [
        "app"
], (app) ->

        Router = Backbone.Router.extend(
                routes:
                        "": "index"
                        ":hash": "index"

                index: (hash) ->
                        console.log 'index'
        )

        Router
