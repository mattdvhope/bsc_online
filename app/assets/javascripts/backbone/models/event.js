var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

App.Models.Event = (function(superClass) {
  extend(Event, superClass);

  function Event() {
    return Event.__super__.constructor.apply(this, arguments);
  }

  Event.prototype.defaults = {
    name: null,
    month: null,
    date: null,
    notes: null
  };

  return Event;

})(App.Model);