var $overlay = $("#overlay");

var VolRegFormView = Backbone.View.extend({
  attributes: {
    id: "entry_form_modal"
  },
  events: {
    "click a.close": "close"
  },
  duration: 300,
  templateVolReg:  HandlebarsTemplates['registration/vol_reg'],
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
    var csrf_token = $('meta[name=csrf-token]').attr('content');
    this.$el.html(this.templateVolReg({
      token: csrf_token
    }));
    this.open(); // to fade the overlay in...
  },
  initialize: function() {
    this.$el.appendTo(document.body);
  }
});





