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
        // App.getVolunteerDashboardPage(model);
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
          $(".email").css("border-color", "blue");
          $(".email").css("border-color", "red");
          console.log(response.responseText);
        }
      }      
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





