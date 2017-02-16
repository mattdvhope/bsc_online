var AdminRegFormView = Backbone.View.extend({

  events: {
    "click .admin-registration-submit": function (e) {
      e.preventDefault();
      this.signUp();
    }
  },

  signUp: function() {
    var model = this.model;
    this.$el.find('input[name]').each(function() {
      model.set(this.name, this.value);
    })

    this.$el.find('select[name]').each(function() {
      model.set(this.name, this.value);
    })

    var options = {
      success: function (model, response, options) {
        $("#adminregformmodal").modal("hide");
        swal({
          title: "Thank you, " + response.first_name + "!",
          text: "We will send an email to \"" + response.email + ".\" The email will show you how to access the online \"CEP Volunteer Administrator Questionnaire\" form.",
          timer: 30000,
          showConfirmButton: true
        });
      },
      error: function (model, response, options) {
        $(".form-control").css("border-color", "#cccccc");
        $("select").css("border-color", "#cccccc");
        $("h4:contains('invalid')").remove();
        $("h4:contains('taken')").remove();
        $("h4:contains('choose')").remove();
        $("h4:contains('option')").remove();
        $("h4:contains('password')").remove();
        $("h4:contains('email')").remove();
        $("h4:contains('inputs')").remove();
        $("h4.appended-pass").remove();
        $("h4.appended-pass-conf").remove();

        $("#admin-reg-submit-button").prepend("<h4 class='appended-pin-note' style='color:red;'>Your inputs above were incorrect.</h4>");

        if (response.responseJSON) {
          response.responseJSON.errors.forEach(function(error) {
            if (error === "First name can't be blank") {
              $(".first-name").css("border-color", "red").attr("placeholder", error);
            }
            else if (error === "Last name can't be blank") {
              $(".last-name").css("border-color", "red").attr("placeholder", error);
            }
            else if (error === "Email can't be blank") {
              $(".email").css("border-color", "red").attr("placeholder", error);
            }
            else if (error === "Email is invalid") {
              $(".email-label").append("<h4 style='color:red;'>" + error + "</h4>");
              $(".email").css("border-color", "red");
            }
            else if (error === "Email has already been taken") {
              $(".email-label").append("<h4 style='color:red;'>Email has already been taken</h4>");
              $(".email").css("border-color", "red");
            }
            else if (error === "Skype name can't be blank") {
              $(".skype-name").css("border-color", "red").attr("placeholder", error);
            }
            else if (error === "Age can't be blank") {
              $(".age").css("border-color", "red").attr("placeholder", error);
            }
            else if (error === "Organization can't be blank") {
              $(".organization").css("border-color", "red").attr("placeholder", error);
            }
            else if (error === "Password can't be blank") {
              $(".password").css("border-color", "red").attr("placeholder", error);
            }
            else if (error === "Password is too short (minimum is 6 characters)") {
              $(".password").css("border-color", "red");
              $(".password-label").append("<h4 class='appended-pass' style='color:red;'>" + error + "</h4>");
            }
            else if (error === "Password confirmation can't be blank") {
              $(".password-confirmation").css("border-color", "red").attr("placeholder", error);
            }
            else if (error === "Password confirmation doesn't match Password") {
              $(".password-confirmation").css("border-color", "red");
              $(".password-confirmation-label").append("<h4 class='appended-pass' style='color:red;'>" + error + "</h4>");
            }
            else if (error === "Password confirmation doesn't match Password") {
              $(".password-confirmation").css("border-color", "red");
              $(".password-conf-label").append("<h4 class='appended-pass-conf' style='color:red;'>Password confirmation doesn't match Password</h4>");
            }
            else if (error === "Phone number can't be blank") {
              $(".phone-number").css("border-color", "red").attr("placeholder", error);
            }
            else if (error === "Address 1 can't be blank") {
              $(".address-one").css("border-color", "red").attr("placeholder", error);
            }
            else if (error === "City can't be blank") {
              $(".city").css("border-color", "red").attr("placeholder", "Town or city can't be blank");
            }
            else if (error === "Province can't be blank") {
              $(".province").css("border-color", "red").attr("placeholder", "State can't be blank");
            }
            else if (error === "Postal code can't be blank") {
              $(".postal-code").css("border-color", "red").attr("placeholder", "Zip code can't be blank");
            }
            else if (error === "Postal code is invalid") {
              $(".postal-code-label").append("<h4 class='appended-pass-conf' style='color:red;'>" + error + "</h4>");
              $(".postal-code").css("border-color", "red");
            }
            else if (error === "Country can't be blank") {
              $(".country").css("border-color", "red").attr("placeholder", error);
            }
          }); // forEach
        } // if (response.responseJSON)
      } // error
    }

    model.save({}, options);
  },

  template:  HandlebarsTemplates['registration/admin_reg'],

  highlightEmptyField: function(input_id, text) {
    if ($(input_id).val() === "") {
      $(input_id).css("border-color", "red").attr("placeholder", "You must enter " + text);
    }
  },
  verifyEmail: function(email) {
    return (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
  },
  verifyPostalCode: function(post) {
    return (/^(\d{5})?$/.test(post))
  }, // FIX this REGEX to correspond to the Ruby REGEX in 'user.rb'!!!

  render: function() {
    var csrf_token = $('meta[name=csrf-token]').attr('content');
    this.$el.html(this.template({
      token: csrf_token
    }));

    return this;
  }
  
});





