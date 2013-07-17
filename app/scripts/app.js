(function() {
  define(["jquery", "underscore", "backbone", "router"], function($, _, Backbone, router) {
    var fireUp;
    fireUp = Backbone.Views.extend(function() {
      return {
        initialize: function() {
          return Backbone.history.start();
        }
      };
    });
    return fireUp;
  });

}).call(this);
