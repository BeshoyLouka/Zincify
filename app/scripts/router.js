(function() {
  define(["app"], function(app) {
    var Router;
    Router = Backbone.Router.extend({
      routes: {
        "": "index",
        ":hash": "index"
      },
      index: function(hash) {
        return console.log('index');
      }
    });
    return Router;
  });

}).call(this);
