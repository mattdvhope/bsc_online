var LogInFormView = Backbone.View.extend({
  attributes: {
    id: "login-modal"
  },

  events: {
    'click .login-submit': function (e) {
      e.preventDefault();
      this.submit();
    }
  },

  submit: function() {
    var session = this.model // Session
    session.set({
      email: this.$("input[name='email']").val(),
      password: this.$("input[name='password']").val(),
    });

    var promise = new Promise(function(resolve, reject) {
      resolve(session.save());
    });

    promise.then(function(result) {
      $("#loginmodal").modal("hide");
      App.getDashboardPage(result); // result = successfully requested 'user object' (not model) from session... with 'id' and everything!
    })
    .catch(function(error) {
      console.log(error);
    });

  },

  templateSession:  HandlebarsTemplates['sessions/log_in'],
  // checkInputs: function(e) {
  //   $(".user_login").css("border-color", "blue");
  //   var someEmpty = $('.user_login').filter(function(){
  //     return $.trim(this.value).length === 0;
  //   }).length > 0;

  //   if (someEmpty) {
  //     e.preventDefault();
  //     this.highlightEmptyField("#login_email", "an email address");
  //     this.highlightEmptyField("#login_password", "your password");
  //   }

  //   if (this.verifyEmail($("#login_email").val()) === false) {
  //     e.preventDefault();
  //     $("input[type='email']").val("").css("border-color", "red").attr("placeholder", "Enter a valid email.");
  //   }
  // },
  // highlightEmptyField: function(input_id, text) {
  //   if ($(input_id).val() === "") {
  //     $(input_id).css("border-color", "red").attr("placeholder", "You must enter " + text);
  //   }
  // },
  // verifyEmail: function(email) {
  //   return (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
  // },
  // close: function(e) {
  //   e.preventDefault();
  //   this.fadeOut();
  //   history.back();
  // },
  render: function() {
    var csrf_token = $('meta[name=csrf-token]').attr('content');
    this.$el.html(this.templateSession({
      token: csrf_token
    }));

    return this;
  }
});





