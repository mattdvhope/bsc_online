var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

App.Routers.Events = (function(superClass) {
  extend(Events, superClass);

  function Events() {
    return Events.__super__.constructor.apply(this, arguments);
  }

  Events.prototype.routes = {
    "events": "index",
    "events/new"   : "new"
  };

  Events.prototype.index = function() {
    var collection, view;
    collection = new App.Collections.Events;
    view = new App.Views.Events.Index({
      collection: collection
    });
    $('body').html(view.el);
    collection.fetch();
    return view.render();
  };

  Events.prototype.new = function() {
    var collection, view;
    collection = new App.Collections.Events;
    view = new App.Views.Events.New({
      collection: collection
    });
    $('body').html(view.el);
    collection.fetch();
    return view.render();
  };

  return Events;

})(App.Router); // class App.Routers.Events extends App.Router

