var StudentRegFormView = Backbone.View.extend({
  attributes: {
    id: "student-registration-modal"
  },

  events: {
    "click .student-registration-submit": function (e) {
      e.preventDefault();
      this.submit();
    }
  },

  submit: function() {
    var model = this.model // Session
    model.set({
      pin: this.$("input[name='pin']").val(),
      nickname: this.$("input[name='nickname']").val(),
      first_name: this.$("input[name='first_name']").val(),
      last_name: this.$("input[name='last_name']").val(),
      gender: this.$("select[name='gender']").val(),
      email: this.$("input[name='email']").val(),
      national_id: this.$("input[name='national_id']").val(),
      age: this.$("input[name='age']").val(),
      phone_number: this.$("input[name='phone_number']").val(),
      password: this.$("input[name='password']").val(),
      password_confirmation: this.$("input[name='password_confirmation']").val(),
    });

    var options = { // need PROMISE HERE!!! ..TO HAVE ACCESS TO (NEW) USER; first 'user' needs to SAVE (& enter a SESSION!!) and THEN we getStudentDashboardPage...the problem here is an attempted "success within a success (in App)" which just doesn't work!
      success: function (model, response, options) {
        $("#registerstudentmodal").modal("hide");
        App.removeNavAndPage();
        App.getStudentDashboardPage(model);
        var $html = $(document.documentElement); // allow scrolling
        $html.css('overflow', '');
      },
      error: function (model, response, options) {
        console.log(model);
        console.log(response);
        console.log(options);
        console.log("error");
        if (response.responseText === '{"errors":"Incorrect PIN"}') {
          $(".pin").css("border-color", "blue");
          $(".pin").css("border-color", "red");
          console.log(response.responseText);
        }
        else if (response.responseText === '{"errors":"Incorrect email"}') {
          $(".email").css("border-color", "blue");
          $(".email").css("border-color", "red");
          console.log(response.responseText);
        }
        else if (response.responseText === '{"errors":["Age cannot be blank"]}') {
          $(".age").css("border-color", "blue");
          $(".age").css("border-color", "red");
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





