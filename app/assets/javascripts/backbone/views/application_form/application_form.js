var ApplicationView = Backbone.View.extend({
  id: "application-form-modal",

  initialize: function(class_times) {
    this.class_times = class_times || {};
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

    var options = {
      success: function (model, response, options) {
        $("#applicationmodal").modal("hide");
        this.welcomePopupView = new WelcomePopupView({ model: model });
        $("#welcomepopupmodal").html(this.welcomePopupView.render().el);
        $("#welcomepopupmodal").modal();
      },
      error: function (model, response, options) {
        $(".form-control").css("border-color", "#cccccc");
        $("select").css("border-color", "#cccccc");
        $("h4:contains('invalid')").remove();
        $("h4:contains('choose')").remove();
        $("h4:contains('option')").remove();
        $("h4:contains('ควร')").remove();
        $("h4:contains('อีเมล์')").remove();
        $("h4.appended-nat-id-note").remove();

        if (response.responseJSON) {
          response.responseJSON.errors.forEach(function(error) {
            if (error === "Nickname can't be blank") {
              $(".nickname").css("border-color", "red").attr("placeholder", "ควรกรอกชื่อเล่นลงในช่องว่าง");
            }
            else if (error === "Nickname is too long (maximum is 20 characters)") {
              $(".nickname").css("border-color", "red").attr("placeholder", "ชื่อเล่นยาวเกินไป (ไม่เกิน 20 ตัวอักษร)");
            }
            else if (error === "First name can't be blank") {
              $(".first-name").css("border-color", "red").attr("placeholder", "ควรกรอกชื่อจริงลงในช่องว่าง");
            }
            else if (error === "Last name can't be blank") {
              $(".last-name").css("border-color", "red").attr("placeholder", "ควรกรอกนามสกุลลงในช่องว่าง");
            }
            else if (error === "Age can't be blank") {
              $(".age").css("border-color", "red").attr("placeholder", "ควรกรอกอายุลงในช่องว่าง");
            }
            else if (error === "Phone number can't be blank") {
              $(".phone-number").css("border-color", "red").attr("placeholder", "ควรกรอกเบอร์โทรศัพท์ลงในช่องว่าง");
            }
            // else if (error === "Email can't be blank") {
            //   $(".email").css("border-color", "red").attr("placeholder", "ควรกรอกอีเมล์ลงในช่องว่าง");
            // }
            else if (error === "Email is invalid") {
              $(".email-label").append("<h4 style='color:red;'>อีเมล์นี้ไม่สามารถใช้งานได้</h4>");
            }
            else if (error === "Email has already been taken") {
              $(".email").css("border-color", "red").attr("placeholder", "อีเมล์นี้มีผู้ใช้อยู่แล้ว");
            }
            // else if (error === "Password can't be blank") {
            //   $(".first-name").css("border-color", "red").attr("placeholder", "ควรกรอกรหัสผ่านลงในช่องว่าง");
            // }
            // else if (error === "Password is too short (minimum is 6 characters)") {
            //   $(".first-name").css("border-color", "red").attr("placeholder", "รหัสผ่านสั้นเกินไป(ขั้นต่ำ 6 ตัวอักษร)");
            // }
            // else if (error === "Password confirmation can't be blank") {
            //   $(".first-name").css("border-color", "red").attr("placeholder", "ควรกรอกการยืนยันรหัสผ่านลงในช่องว่าง");
            // }
            else if (error === "National can't be blank") {
              $(".national-id").css("border-color", "red").attr("placeholder", "ควรกรอกหมายเลขประจำตัวประชาชนลงในช่องว่าง");
            }
            else if (error === "National is invalid") {
              $(".national-id-label").css("border-color", "red").append("<h4 class='appended-nat-id-note' style='color:red;'>หมายเลขประจำตัวประชาชนนี้ไม่สามารถใช้งานได้</h4>");
            }
            else if (error === "National has already been taken") {
              $(".national-id").css("border-color", "red");
              $(".national-id-label").append("<h4 class='appended-nat-id-note' style='color:red;'>หมายเลขประจำตัวประชาชนนี้มีผู้ใช้อยู่แล้ว</h4>");
            }
            else if (error === "Class period must be selected") {
              $(".seminar-session-select").css("border-color", "red");
              $(".non-univ-sched-options").append("<h4 style='color:red;'>คุณควรเลือกช่วงเวลาที่คุณต้องการจะเรียน</h4>");
            }
          }); // forEach
        } // if (response.responseJSON.errors)
      } // error:
    }; // options
    
    model.save({}, options);

  },

  thai_language: function() {
    return sessionStorage.getItem('language') === "thai";
  },
  application_title: function() {
    return this.choose_language("Register for the class, \"You Can Speak!\"", "แบบฟอร์มสำหรับลงทะเบียนชั้นเรียน \"You Can Speak!\"");
  },

  please_click_here: function() {
    return this.choose_language("Details about this class", "ดูรายละเอียดเกี่ยวกับชั้นเรียนนี้");
  },

  schedule_option_one: function() {
    return this.choose_language("Option 1: Study one time per week for five weeks.", "ทางเลือกที่ 1: เรียนสัปดาห์ละ 1 ครั้ง ในเวลา 5 สัปดาห์");
  },
  schedule_option_two: function() {
    return this.choose_language("Option 2: All 5 sessions in one week,  Monday-Friday.", "ทางเลือกที่ 2: เรียนทั้ง 5 คาบเรียนในเวลา 1 สัปดาห์, วันจันทร์ – วันศุกร์");
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

  regular_class_times: function() {
    return this.class_times.options;
  },

  template:  HandlebarsTemplates['application_form/application_form'],

  render: function() {
    var csrf_token = $('meta[name=csrf-token]').attr('content');

    this.$el.html(this.template({
      token: csrf_token,
      thai_language: this.thai_language(),
      application_title: this.application_title(),
      please_click_here: this.please_click_here(),
      schedule_option_one: this.schedule_option_one(),
      schedule_option_two: this.schedule_option_two(),
      class_cost: this.class_cost(),
      pan_road: this.pan_road(),
      regular_class_times: this.regular_class_times()
    }));

    return this;
  }

});