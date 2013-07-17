(function() {
  require.config({
    paths: {
      jquery: '../bower_components/jquery/jquery',
      backbone: '../bower_components/backbone-amd/backbone',
      underscore: '../bower_components/underscore-amd/underscore',
      bootstrap: 'vendor/bootstrap'
    },
    shim: {
      underscore: {
        exports: '_'
      },
      backbone: {
        deps: ['underscore', 'jquery'],
        exports: 'Backbone'
      },
      bootstrap: {
        deps: ['jquery'],
        exports: 'jquery'
      }
    }
  });

  require(['app', 'router'], function(app, router) {
    return app.initialize();
  });

}).call(this);
