(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(["jquery", "underscore", "backbone", "bootstrap"], function($, _, Backbone) {
    var starter, starterView, _ref;
    starter = (function(_super) {
      __extends(starter, _super);

      function starter() {
        _ref = starter.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      starter.prototype.initialize = function() {
        return console.log('home view started...');
      };

      return starter;

    })(Backbone.View);
    return starterView = new starter;
  });

}).call(this);
