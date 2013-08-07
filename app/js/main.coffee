## Set the require.js configuration for your application.
require.config

    ## Initialize the application with the main application file
    ## deps: ["main"]

    paths:
            jquery: '../bower_components/jquery/jquery'
            underscore: '../bower_components/underscore-amd/underscore'
            backbone: '../bower_components/backbone-amd/backbone'
            bootstrap: '../bower_components/bootstrap/dist/js/bootstrap.min'

    shim:
            underscore:
                    exports: '_'

            backbone:
                    deps: [
                        'underscore'
                        'jquery'
                    ]
                    exports: 'Backbone'

            bootstrap:
                    deps: ['jquery']
                    exports: 'jquery'


require [
        'app'
    ], (app) ->
        ## Treat the jQuery ready function as the entry point to the application.
        ## Inside this function, kick-off all initialization, everything up to this
        ## point should be definitions.
        $ ->
            Backbone.history.start pushState: true
