require.config({
paths: {
  jquery: '../bower_components/jquery/jquery',
  underscore: '../bower_components/underscore-amd/underscore',
  backbone: '../bower_components/backbone-amd/backbone',
  bootstrap: '../bower_components/bootstrap/dist/js/bootstrap.min',
  text: '../bower_components/requirejs-text/text',
  routes: 'routes'
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
  return Backbone.history.start({
    pushState: true
  });
});
