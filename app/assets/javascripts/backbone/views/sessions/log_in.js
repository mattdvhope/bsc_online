var $overlay = $("#overlay");

var LogInFormView = Backbone.View.extend({
  attributes: {
    id: "log_in_form_modal"
  },
  events: {
    "click a.close": "close"
  },
  duration: 300,
  template:  HandlebarsTemplates['sessions/log_in'],
  open: function () {
    this.$el.add($overlay).fadeIn(this.duration);
  },
  close: function(e) {
    e.preventDefault();
    this.fadeOut();
    history.back();
  },
  fadeOut: function() {
    $overlay.fadeOut(this.duration);
    this.$el.fadeOut(this.duration, function() {
      this.remove();
    }.bind(this));
  },
  render: function() {
    this.$el.html(this.template({
      token: $('meta[name=csrf-token]').attr('content')
    }));
    this.open(); // to fade the overlay in...
  },
  initialize: function() {
    this.$el.appendTo(document.body);
  }
});





