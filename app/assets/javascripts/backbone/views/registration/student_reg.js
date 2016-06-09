var StudentRegFormView = Backbone.View.extend({
  attributes: {
    id: "student-registration-modal"
  },

  events: {
    "click .registration-submit": function (e) {
      e.preventDefault();
      this.submit();
    }
  },

  submit: function() {
    var model = this.model // Session
    model.set({
      pin: this.$("input[name='pin']").val(),
      email: this.$("input[name='email']").val(),
      password: this.$("input[name='password']").val(),
      password_confirmation: this.$("input[name='password_confirmation']").val(),
    });

    var options = {
      success: function (model, response, options) {
        $("#registerstudentmodal").modal("hide");
        App.getStudentDashboardPage(model);
        var $html = $(document.documentElement); // allow scrolling
        $html.css('overflow', '');
      },
      error: function (model, response, options) {
        console.log("error");
        if (response.responseText === '{"errors":"Incorrect PIN"}') {
          $(".pin").css("border-color", "blue");
          $(".pin").css("border-color", "red");
          console.log(response.responseText);
        }
        else if (response.responseText === '{"errors":"Incorrect email"}') {
          $(".pin").css("border-color", "blue");
          $(".email").css("border-color", "red");
          console.log(response.responseText);
        }
      }      
    }

    model.save({}, options);
  },

  templateStudentReg:  HandlebarsTemplates['registration/student_reg'],

  // checkInputs: function(e) {
  //   $(".student_registration").css("border-color", "blue");
  //   var someEmpty = $('.student_registration').filter(function(){
  //     return $.trim(this.value).length === 0;
  //   }).length > 0;

  //   if (someEmpty) {
  //     e.preventDefault();
  //     this.highlightEmptyField("#user_pin", "your PIN");
  //     this.highlightEmptyField("#user_first_name", "your first name");
  //     this.highlightEmptyField("#user_last_name", "your last name");
  //     this.highlightEmptyField("#user_email", "an email address");
  //     this.highlightEmptyField("#user_password", "your password");
  //     this.highlightEmptyField("#user_password_confirmation", "your password confirmation");
  //     this.highlightEmptyField("#user_postal_code", "a postal code");
  //   }

  //   if ($("#user_password").val() !== $("#user_password_confirmation").val()) {
  //     e.preventDefault();
  //     $("input[type='password']").val("").css("border-color", "red").attr("placeholder", "Your passwords must match.");
  //   }

  //   if (this.verifyEmail($("#user_email").val()) === false) {
  //     e.preventDefault();
  //     $("input[type='email']").val("").css("border-color", "red").attr("placeholder", "Enter a valid email.");
  //   }

  //   if (this.verifyPostalCode($("#user_postal_code").val()) === false) {
  //     e.preventDefault();
  //     $("input[id='user_postal_code']").val("").css("border-color", "red").attr("placeholder", "Enter a valid postal code.");
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
  // verifyPostalCode: function(post) {
  //   return (/^(\d{5})?$/.test(post))
  // }, // FIX this REGEX to correspond to the Ruby REGEX in 'user.rb'!!!

  render: function() {
    var csrf_token = $('meta[name=csrf-token]').attr('content');
    this.$el.html(this.templateStudentReg({
      token: csrf_token
    }));

    return this;
  }

});





