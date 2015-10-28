var $overlay = $("#overlay");

var LogInFormView = Backbone.View.extend({
  duration: 300,
  template:  HandlebarsTemplates['albums/new'],
  open: function () {
    this.$el.add($overlay).fadeIn(this.duration);
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





