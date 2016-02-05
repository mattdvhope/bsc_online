var $overlay = $("#overlay");

var VolRegFormView = Backbone.View.extend({
  attributes: {
    id: "entry_form_modal"
  },
  events: {
    "click a.close": "close",
    "click input.vol_reg_er": "checkInputs"
  },
  duration: 300,
  templateVolReg:  HandlebarsTemplates['registration/vol_reg'],
  open: function () {
    this.$el.add($overlay).fadeIn(this.duration);
  },
  checkInputs: function(e) {
    $(".vol_registration").css("border-color", "blue");
    var someEmpty = $('.vol_registration').filter(function(){
      return $.trim(this.value).length === 0;
    }).length > 0;

    if (someEmpty) {
      e.preventDefault();
      this.highlightEmptyField("#vol_pin", "your PIN");
      this.highlightEmptyField("#vol_first_name", "your first name");
      this.highlightEmptyField("#vol_last_name", "your last name");
      this.highlightEmptyField("#user_occupation", "your occupation");
      this.highlightEmptyField("#user_email", "an email address");
      this.highlightEmptyField("#vol_password", "your password");
      this.highlightEmptyField("#vol_password_confirmation", "your password confirmation");
      this.highlightEmptyField("#user_phone_number", "a phone number");
      this.highlightEmptyField("#user_address_1", "an address");
      this.highlightEmptyField("#user_city", "a city or town");
      this.highlightEmptyField("#user_province", "a state or province");
      this.highlightEmptyField("#vol_postal_code", "a postal code");
      this.highlightEmptyField("#user_country", "a country/nation");
    }

    if ($("#vol_password").val() !== $("#vol_password_confirmation").val()) {
      e.preventDefault();
      $("input[type='password']").val("").css("border-color", "red").attr("placeholder", "Your passwords must match.");
    }

    if (this.verifyEmail($("#user_email").val()) === false) {
      e.preventDefault();
      $("input[type='email']").val("").css("border-color", "red").attr("placeholder", "Enter a valid email.");
    }

    if (this.verifyPostalCode($("#vol_postal_code").val()) === false) {
      e.preventDefault();
      $("input[id='vol_postal_code']").val("").css("border-color", "red").attr("placeholder", "Enter a valid postal code.");
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
  verifyPostalCode: function(post) {
    return (/^(\d{5})?$/.test(post))
  }, // FIX this REGEX to correspond to the Ruby REGEX in 'user.rb'!!!

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
    App.reg_form = undefined;
  },
  render: function() {
    var csrf_token = $('meta[name=csrf-token]').attr('content');
    this.$el.html(this.templateVolReg({
      token: csrf_token
    }));
    this.open(); // to fade the overlay in...
  },
  initialize: function() {
    this.$el.appendTo(document.body);
  }
});





