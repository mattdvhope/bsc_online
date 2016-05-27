var ApplicationView = Backbone.View.extend({
  id: "application-form-modal",

  initialize: function() {

  },
  events: {
    'click .guest-add': function (e) {
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

    if($('.radio-pay_at_center').is(':checked')) {
      model.set({payment_option: "pay_at_center"});
    }

    if($('.radio-pay_by_transfer').is(':checked')) {
      model.set({payment_option: "pay_by_transfer"});
    }

    var options = {
      error: function (model, response, options) {
        $(".form-control").css("border-color", "#cccccc");
        $("select").css("border-color", "#cccccc");
        $("h4:contains('invalid')").remove();
        $("h4:contains('choose')").remove();
        $("h4:contains('option')").remove();

        if (response.responseJSON) {
          response.responseJSON.errors.forEach(function(error) {
            if (error === "Nickname can't be blank") {
              $(".nickname").css("border-color", "red").attr("placeholder", "Need Nickname");
            }
            if (error === "First name can't be blank") {
              $(".first-name").css("border-color", "red").attr("placeholder", "First name can't be blank");
            }
            else if (error === "Last name can't be blank") {
              $(".last-name").css("border-color", "red").attr("placeholder", "Last name can't be blank");
            }
            else if (error === "Phone number can't be blank") {
              $(".phone-number").css("border-color", "red").attr("placeholder", "Phone number can't be blank");
            }
            else if (error === "Email can't be blank") {
              $(".email").css("border-color", "red").attr("placeholder", "Email can't be blank");
            }
            else if (error === "Email is invalid") {
              $(".email-label").append("<h4 style='color:red;'>Email format is invalid</h4>");
            }
            else if (error === "Email has already been taken") {
              $(".email-label").append("<h4 style='color:red;'>Email has already been taken</h4>");
            }
            else if (error === "District can't be blank") {
              $(".district").css("border-color", "red").attr("placeholder", "District can't be blank");
            }
            else if (error === "Password can't be blank") {
              $(".first-name").css("border-color", "red").attr("placeholder", "Password can't be blank");
            }
            else if (error === "Password is too short (minimum is 6 characters)") {
              $(".first-name").css("border-color", "red").attr("placeholder", "Password is too short (minimum is 6 characters)");
            }
            else if (error === "Password confirmation can't be blank") {
              $(".first-name").css("border-color", "red").attr("placeholder", "Password confirmation can't be blank");
            }
            else if (error === "Postal code can't be blank") {
              $(".first-name").css("border-color", "red").attr("placeholder", "Postal code can't be blank");
            }
            else if (error === "Postal code is invalid") {
              $(".first-name").css("border-color", "red").attr("placeholder", "Postal code is invalid");
            }
            else if (error === "Class time must be selected") {
              $(".seminar-session-select").css("border-color", "red");
              $("h2.schedule-options").append("<h4 style='color:red;'>You must choose a class time</h4>");
            }
            else if (error === "Payment option can't be blank") {
              $("fieldset#payment-options").css("border-color", "red");
              $(".payment-options-label").append("<h4 style='color:red;'>Payment option can't be blank</h4>");
            }
          }); // forEach
        } // if (response.responseJSON.errors)
      } // error:
    }; // options
    
    model.save(model.toJSON(), options);

  },

  thai_language: function() {
    return sessionStorage.getItem('language') === "thai";
  },
  application_title: function() {
    return this.choose_language("Register for the class, \"You Can Speak!\"", "แบบฟอร์มสำหรับลงทะเบียนชั้นเรียน \"You Can Speak!\"");
  },
  univ_application_title: function() {
    return this.choose_language("University Student Promotion!! \"You Can Speak!\" class", "โปรโมชั่นสำหรับนักศึกษา!! ชั้นเรียน \"You Can Speak!\"");
  },
  schedule_option_one: function() {
    return this.choose_language("Option 1: Study one time per week for five weeks.", "ทางเลือกที่ 1: เรียนสัปดาห์ละ 1 ครั้ง ในเวลา 5 สัปดาห์");
  },
  schedule_option_two: function() {
    return this.choose_language("Option 2: All 5 sessions in one week,  Monday-Friday.", "ทางเลือกที่ 2: เรียนทั้ง 5 คาบเรียนในเวลา 1 สัปดาห์, วันจันทร์ – วันศุกร์");
  },
  choose_payment_option: function() {
    return this.choose_language("Choose your payment option", "ช่องทางการชำระเงิน");
  },
  class_cost: function() {
    return this.choose_language("How much does each class cost?", "แต่ละชั้นเรียนมีค่าใช้จ่ายเท่าไหร่?");
  },
  pay_at_center: function() {
    return this.choose_language("Pay at the CEP Center on ", "ชำระเงินด้วยตนเองที่ศูนย์โครงการซิตี้ อิงลิช ");
  },
  pan_road: function() {
    return this.choose_language("Pan Road", "ถนนปั้น (สำนักงานจะเปิดในวันที่ 5 มิถุนายน 2559 นี้)");
  },
  payment_info: function() {
    return this.choose_language("CEP's payment information", "ข้อมูลการชำระเงินโครงการซิตี้ อิงลิช");
  },

  choose_language: function(english, thai) {
    if (this.thai_language()) {
      return thai
    } else {
      return english;
    }
  },

  university_summer_applicant: function() {
    return sessionStorage.getItem('student_type') === "university_summer_applicant";
  },

  student_type_price: function() {
    if (sessionStorage.getItem('student_type') === "university_summer_applicant") {
      return "299"
    } else if (sessionStorage.getItem('student_type') === "non_summer_university") {
      return "399"
    }
  },


  template:  HandlebarsTemplates['application_form/application_form'],

  render: function() {
    var csrf_token = $('meta[name=csrf-token]').attr('content');
    this.$el.html(this.template({
      token: csrf_token,
      thai_language: this.thai_language(),
      application_title: this.application_title(),
      univ_application_title: this.univ_application_title(),
      schedule_option_one: this.schedule_option_one(),
      schedule_option_two: this.schedule_option_two(),
      choose_payment_option: this.choose_payment_option(),
      class_cost: this.class_cost(),
      pay_at_center: this.pay_at_center(),
      pan_road: this.pan_road(),
      payment_info: this.payment_info(),
      university_summer_applicant: this.university_summer_applicant(),
      student_type_price: this.student_type_price(),
    }));

    return this;
  }

});