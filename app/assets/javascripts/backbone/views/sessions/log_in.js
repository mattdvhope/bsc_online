var LogInFormView = Backbone.View.extend({
  attributes: {
    id: "login-modal"
  },

  templateSession:  HandlebarsTemplates['sessions/log_in'],

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
      $("#loginmodal").modal("hide");
      App.removeNavAndPage();
      resolve(session.save()); // gives object-not model-from ruby
    });

    promise
    .then(function(result) { // 'result' means 'onFulfilled'
      if (result.role === "leader") {
        App.getDashboardPage(makeModel(result)); // result = successfully requested 'user object' (not model) from session... with 'id' and everything!
      }
      else if (result.role === "volunteer" || result.role === "admin") {
        App.getVolunteerDashboardPage(makeModel(result)); // result = successfully requested 'user object' (not model) from session... with 'id' and everything!
      }
      else if (result.role === "student") {
        App.getStudentDashboardPage(makeModel(result)); // result = successfully requested 'user object' (not model) from session... with 'id' and everything!
        // App.instantiateVolunteerProfile();
      }
    })
    .catch(function(error) { // 'error' means 'onRejected'
      App.getFrontMainPage();
      console.log(error.responseJSON.error);
      swal({
        title: "Problem logging into app",
        // text: "Internet service is slow or some data incorrect.  Please try again.",
        text: error.responseJSON.error,
        timer: 15000,
        showConfirmButton: true,
        animation: "slide-from-bottom"
      });
    });

    function makeModel(result) {
      return new Backbone.Model(result);
    }

  },

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





