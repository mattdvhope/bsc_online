var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

App.Collections.Events = (function(superClass) {
  extend(Events, superClass);

  function Events() {
    return Events.__super__.constructor.apply(this, arguments);
  }

  Events.prototype.url = '/events';

  Events.prototype.model = App.Models.Event;

  return Events;

})(App.Collection);