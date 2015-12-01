var $overlay = $("#overlay");

var VolRegFormView = Backbone.View.extend({
  attributes: {
    id: "entry_form_modal"
  },
  events: {
    "click a.close": "close",
    "click input.volunteer_reg_er": "checkInputs"
  },
  duration: 300,
  templateVolReg:  HandlebarsTemplates['registration/vol_reg'],
  open: function () {
    this.$el.add($overlay).fadeIn(this.duration);
  },
  checkInputs: function(e) {
    $(".volunteer_registration").css("border-color", "blue");
    var someEmpty = $('.volunteer_registration').filter(function(){
      return $.trim(this.value).length === 0;
    }).length > 0;

    if (someEmpty) {
      e.preventDefault();
      this.highlightEmptyField("#volunteer_first_name", "your first name");
      this.highlightEmptyField("#volunteer_last_name", "your last name");
      this.highlightEmptyField("#user_occupation", "your occupation");
      this.highlightEmptyField("#user_email", "an email address");
      this.highlightEmptyField("#volunteer_password", "your password");
      this.highlightEmptyField("#volunteer_password_confirmation", "your password confirmation");
      this.highlightEmptyField("#user_phone_number", "a phone number");
      this.highlightEmptyField("#user_address_1", "an address");
      this.highlightEmptyField("#user_address_2", "an address");
      this.highlightEmptyField("#user_city", "a city or town");
      this.highlightEmptyField("#user_province", "a state or province");
      this.highlightEmptyField("#volunteer_postal_code", "a postal code");
      this.highlightEmptyField("#user_country", "a country/nation");
    }

    if ($("#volunteer_password").val() !== $("#volunteer_password_confirmation").val()) {
      e.preventDefault();
      $("input[type='password']").val("").css("border-color", "red").attr("placeholder", "Your passwords must match.");
    }

    if (this.verifyEmail($("#user_email").val()) === false) {
      e.preventDefault();
      $("input[type='email']").val("").css("border-color", "red").attr("placeholder", "Enter a valid email.");
    }

    if (this.verifyPostalCode($("#volunteer_postal_code").val()) === false) {
      e.preventDefault();
      $("input[id='volunteer_postal_code']").val("").css("border-color", "red").attr("placeholder", "Enter a valid postal code.");
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





