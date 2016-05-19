var ApplicationView = Backbone.View.extend({
  id: "application-form-modal",

  initialize: function() {
    $(".university-summer-applic").on("click", function() {
      sessionStorage.setItem("student_type", "university_summer_applicant");
    });

    $(".non-summer-university").on("click", function() {
      sessionStorage.setItem("student_type", "non_summer_university");
    });
  },
  events: {},

  thai_language: function() {
    return sessionStorage.getItem('language') === "thai";
  },
  application_title: function() {
    return this.choose_language("Register for the class, 'You Can Speak'", "แบบฟอร์มสำหรับลงทะเบียนชั้นเรียน 'You Can Speak'");
  },
  univ_application_title: function() {
    return this.choose_language("University Student Promotion!!", "โปรโมชั่นสำหรับนักศึกษา!!");
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
    return this.choose_language("Pan Road", "ถนนปั้น");
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

