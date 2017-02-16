var VolRegFormView = Backbone.View.extend({
  attributes: {
    id: "volunteer-registration-modal"
  },

  events: {
    "click .volunteer-registration-submit": function (e) {
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
        $("#registervolunteermodal").modal("hide");
        App.removeNavAndPage();
        App.getVolunteerDashboardPage(model);
        var $html = $(document.documentElement); // allow scrolling
        $html.css('overflow', '');
      },
      error: function (model, response, options) {
        $(".form-control").css("border-color", "#cccccc");
        $("select").css("border-color", "#cccccc");
        $("h4:contains('invalid')").remove();
        $("h4:contains('choose')").remove();
        $("h4:contains('option')").remove();
        $("h4:contains('ควร')").remove();
        $("h4:contains('อีเมล์')").remove();
        $("h4.appended-pass").remove();
        $("h4.appended-pass-conf").remove();
        $("h4.appended-pin-note").remove();
        $("h4.appended-nat-id-note").remove();
        $("h4.appended-postal").remove();

        if (response.responseJSON) {
          if (response.responseJSON["errors"] === "Incorrect PIN") {
            $(".pin").css("border-color", "red");
            $(".pin-label").append("<h4 class='appended-pin-note' style='color:red;'>This PIN is not valid.</h4>");
            $("#vol-submit-input-button").prepend("<h4 class='appended-pin-note' style='color:red;'>This PIN is not valid.</h4>");
          } else {
            $("#vol-submit-input-button").prepend("<h4 class='appended-pin-note' style='color:red;'>Your inputs above were incorrect.</h4>");
          }
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
            }
            else if (error === "Email has already been taken") {
              $(".email-label").append("<h4 style='color:red;'>" + error + "</h4>");
            }
            else if (error === "Skype name can't be blank") {
              $(".skype-address").css("border-color", "red").attr("placeholder", error);
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
              $(".password-conf-label").append("<h4 class='appended-pass-conf' style='color:red;'>" + error + "</h4>");
            }
            else if (error === "Phone number can't be blank") {
              $(".phone-number").css("border-color", "red").attr("placeholder", error);
            }
          }); // forEach
        } // if (response.responseJSON.errors)
      } // error:
    }

    model.save({}, options);
  },

  templateVolReg:  HandlebarsTemplates['registration/vol_reg'],

  render: function() {
    var csrf_token = $('meta[name=csrf-token]').attr('content');
    this.$el.html(this.templateVolReg({
      token: csrf_token
    }));

    return this;
  }
});

