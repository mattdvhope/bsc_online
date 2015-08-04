var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

App.Views.Events.New = (function(superClass) {
  extend(New, superClass);

  function New() {
    return New.__super__.constructor.apply(this, arguments);
  }

  New.prototype.template = HandlebarsTemplates['events/new'];

  New.prototype.parameters = function() {
    return this.collection.map(function(model) {
      return {
        name: model.get('name'),
        notes: model.get('notes')
      };
    });
  };

  New.prototype.initialize = function() {
    this.collection.on('sync', this.render, this);
    return New.__super__.initialize.apply(this, arguments);
  };

  New.prototype.remove = function() {
    this.collection.off('sync', this.render, this);
    return New.__super__.remove.apply(this, arguments);
  };

  New.prototype.events = {
    "submit #new-event": "save"
  };

  New.prototype.render = function() {
    return this.$el.html(this.template(this.parameters()));
  };

  New.prototype.save = function(e) {
  console.log(e);
    var date, model, month, name, notes;
    e.preventDefault();
    e.stopPropagation();
    name = $('#name').val();
    month = $('#month').val();
    date = $('#date').val();
    notes = $('#notes').val();
    model = new App.Models.Event({
      name: name,
      month: month,
      date: date,
      notes: notes
    });
    this.collection.create(model, {
      success: (function(_this) {
        return function(event) {};
      })(this)
    });
    this.model = event;
    return window.location.hash = "/" + this.model.id;
  };


  return New;

})(App.View);





// var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
//   hasProp = {}.hasOwnProperty;

// App.Views.Events.New = (function(superClass) {
//   extend(New, superClass);

//   function New() {
//     return New.__super__.constructor.apply(this, arguments);
//   }

//   New.prototype.el = '#new-event';

//   New.prototype.template = HandlebarsTemplates["events/new"];

//   New.prototype.events = {
//     "submit #new-event": "save"
//   };

//   New.prototype.initialize = function() {
//     return this.render();
//   };

//   New.prototype.render = function() {
//     return this.$el.html(this.template());
//   };

//   New.prototype.save = function(e) {
//     var date, model, month, name, notes;
//     e.preventDefault();
//     e.stopPropagation();
//     name = $('#name').val();
//     month = $('#month').val();
//     date = $('#date').val();
//     notes = $('#notes').val();
//     model = new App.Models.Event({
//       name: name,
//       month: month,
//       date: date,
//       notes: notes
//     });
//     this.collection.create(model, {
//       success: (function(_this) {
//         return function(event) {};
//       })(this)
//     });
//     this.model = event;
//     return window.location.hash = "/" + this.model.id;
//   };

//   return New;

// })(Backbone.View);