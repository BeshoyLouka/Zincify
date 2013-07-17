(function() {
  require.config({
    paths: {
      jquery: '../bower_components/jquery/jquery',
      underscore: '../bower_components/underscore-amd/underscore',
      backbone: '../bower_components/backbone-amd/backbone',
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

  require(['app'], function(app) {
    return app.initialize();
  });

}).call(this);
