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
  templateStudent:  HandlebarsTemplates['sessions/student_log_in'],
  templateTeacher:  HandlebarsTemplates['sessions/teacher_log_in'],
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
    App.allowBodyScrolling();
    $overlay.fadeOut(this.duration);
    this.$el.fadeOut(this.duration, function() {
      this.remove();
    }.bind(this));
  },
  render: function(person) {
    var csrf_token = $('meta[name=csrf-token]').attr('content');

    if (person === "Student") {
      this.$el.html(this.templateStudent({
        token: csrf_token
      }));
      this.open(); // to fade the overlay in...
    } else if (person === "Teacher") {
      this.$el.html(this.templateTeacher({
        token: csrf_token
      }));
      this.open();
    }
  },
  initialize: function() {
    this.$el.appendTo(document.body);
  }
});





