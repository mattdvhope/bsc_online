var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

App.Views.Events.Index = (function(superClass) {
  extend(Index, superClass);

  function Index() {
    return Index.__super__.constructor.apply(this, arguments);
  }

  Index.prototype.template = HandlebarsTemplates['events/index'];

  Index.prototype.parameters = function() {
    return this.collection.map(function(model) {
      return {
        name: model.get('name'),
        notes: model.get('notes')
      };
    });
  };

  Index.prototype.initialize = function() {
    this.collection.on('sync', this.render, this);
    return Index.__super__.initialize.apply(this, arguments);
  };

  Index.prototype.remove = function() {
    this.collection.off('sync', this.render, this);
    return Index.__super__.remove.apply(this, arguments);
  };

  Index.prototype.render = function() {
    return this.$el.html(this.template(this.parameters()));
  };

  return Index;

})(App.View);