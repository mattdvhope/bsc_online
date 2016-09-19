var AdminRegFormView = Backbone.View.extend({

  events: {
    "click a.close": "close",
    "click input.admin_reg_er": "checkInputs"
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





