var $overlay = $("#overlay");

var LogInFormView = Backbone.View.extend({
  attributes: {
    id: "entry_form_modal"
  },
  events: {
    "click a.close": "close",
    "click input.login_checker": "checkInputs"
  },
  duration: 300,
  templateSession:  HandlebarsTemplates['sessions/log_in'],
  open: function () {
    this.$el.add($overlay).fadeIn(this.duration);
  },
  checkInputs: function(e) {
    $(".user_login").css("border-color", "blue");
    var someEmpty = $('.user_login').filter(function(){
      return $.trim(this.value).length === 0;
    }).length > 0;

    if (someEmpty) {
      e.preventDefault();
      this.highlightEmptyField("#login_email", "an email address");
      this.highlightEmptyField("#login_password", "your password");
    }

    if (this.verifyEmail($("#login_email").val()) === false) {
      e.preventDefault();
      $("input[type='email']").val("").css("border-color", "red").attr("placeholder", "Enter a valid email.");
    }
  },
  highlightEmptyField: function(input_id, text) {
    if ($(input_id).val() === "") {
      $(input_id).css("border-color", "red").attr("placeholder", "You must enter " + text);
    }
  },
  verifyEmail: function(email) {
    return (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
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
    App.log_in_form = undefined;
  },
  render: function(person) {
    var csrf_token = $('meta[name=csrf-token]').attr('content');
      this.$el.html(this.templateSession({
        token: csrf_token
      }));
      this.open(); // to fade the overlay in...
  },
  initialize: function() {
    this.$el.appendTo(document.body);
  }
});





