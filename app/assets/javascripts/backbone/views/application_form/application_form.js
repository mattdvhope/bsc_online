var ApplicationView = Backbone.View.extend({
  id: "application-form-modal",

  initialize: function(class_times) {
    this.class_times = class_times || {};
  },

  events: {
    'click .guest-add': function (e) {
      e.preventDefault();
      this.signUp();
    },
    'click button.btn-primary': function (e) {
      $('.collapse').collapse('toggle');
    },
    'click .btn-intro-bullets': function (e) {
      $('.collapse').collapse('toggle');
    },
    'change #non-univ-select': 'deal_with_off_site_classes'
  },

  deal_with_off_site_classes: function(e) {
    var options = $(e.target)[0].children;
    var options_arr = $.map(options, function(value, index) {
      return [value];
    });
    var off_site_locations = this.collection;
    options_arr.forEach(function(value) {
      if ($(value).val() === "Off-site class (not at our center)" && $(value).is(':selected')) {
        var off_site_locations_view = new OffSiteLocationsView({ collection: off_site_locations });
        off_site_locations_view.render();
      }
      if ($(value).val() === "Off-site class (not at our center)" && !$(value).is(':selected')) {
        $("#off-site-loc-span").remove();
      }
    });
  },

  signUp: function() {
    var model = this.model;

    this.$el.find('input[name]').each(function() {
      model.set(this.name, this.value);
    });

    this.$el.find('select[name]').each(function() {
      model.set(this.name, this.value);
    });

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
          $(".control-group").prepend("<h4 class='appended-pin-note' style='color:red;'>ข้อมูลข้างบนไม่ถูกต้อง</h4>");
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

  }, // signUp:

  application_title: function() {
    return choose_language("Register for the class, \"You Can Speak!\"", "แบบฟอร์มสมัครเรียนหลักสูตร \"You Can Speak!\"");
  },

  bank_transfer_info: function() {
    return choose_language("CEP bank transfer information", "ข้อมูลสำหรับการโอนเงินโครงการซิตี้ อิงลิช");
  },

  bank_transfer_extra_info: function() {
    return choose_language("(Please pay within 7 days.  Please bring bank tranfer slip to class as proof of payment)", "(กรุณาชำระค่าสมัครเรียนภายใน 7 วัน และกรุณานำหลักฐานการโอนเงินมายืนยันในชั้นเรียน)");
  },

  bank_name: function() {
    return choose_language("Bank: Bangkok Bank", "ธนาคาร: ธนาคารกรุงเทพ");
  },

  bank_person: function() {
    return choose_language("Contact Person: \"Ms. Karen Elizabeth Erskine\"", "บุคคลที่ติดต่อ: \"Ms. Karen Elizabeth Erskine\"");
  },

  bank_number: function() {
    return choose_language("Acct Number: 200-4-17105-0", "หมายเลขบัญชี: 200-4-17105-0");
  },

  promotion_price: function() {
    return choose_language("(499 baht promotional price for June and July!!)", "(ราคาโปรโมชั่น 499 บาทสำหรับเดือนมิถุนายนและกรกฎาคมนี้!!)");
  },

  please_click_here: function() {
    return choose_language("Details about this class", "คำอธิบายสำหรับชั้นเรียนนี้");
  },

  course_options: function() {
    return choose_language("Course Options", "ทางเลือกสำหรับการเรียน");
  },

  schedule_option_one: function() {
    return choose_language("Option 1: Study one time per week for five weeks.", "ทางเลือกที่ 1: เรียนสัปดาห์ละ 1 ครั้ง ในเวลา 5 สัปดาห์");
  },
  schedule_option_two: function() {
    return choose_language("Option 2: All 5 sessions in one week,  Monday-Friday.", "ทางเลือกที่ 2: เรียนทั้ง 5 คาบเรียนในเวลา 1 สัปดาห์, วันจันทร์ – วันศุกร์");
  },
  class_cost: function() {
    return choose_language("How much does each class cost?", "แต่ละชั้นเรียนมีค่าใช้จ่ายเท่าไหร่?");
  },
  pay_at_center: function() {
    return choose_language("Pay at the CEP Center on ", "ชำระเงินด้วยตนเองที่ศูนย์โครงการซิตี้ อิงลิช ");
  },
  pan_road: function() {
    return choose_language("Pan Road", "ถนนปั้น (สำนักงานจะเปิดในวันที่ 5 มิถุนายน 2559 นี้)");
  },
  payment_info: function() {
    return choose_language("CEP's payment information", "ข้อมูลการชำระเงินโครงการซิตี้ อิงลิช");
  },

  regular_class_times: function() {
    return this.class_times.options;
  },

  off_site_locations: function() {
    return this.off_site_locations.options
  },

  template: HandlebarsTemplates['application_form/application_form'],

  template_off_site: HandlebarsTemplates['application_form/off_site'],

  render: function() {
    var csrf_token = $('meta[name=csrf-token]').attr('content');
    this.$el.html(this.template({
      token: csrf_token,
      thai_language: thai_language(),
      application_title: this.application_title(),
      bank_transfer_info: this.bank_transfer_info(),
      bank_transfer_extra_info: this.bank_transfer_extra_info(),
      bank_name: this.bank_name(),
      bank_person: this.bank_person(),
      bank_number: this.bank_number(),
      promotion_price: this.promotion_price(),
      please_click_here: this.please_click_here(),
      course_options: this.course_options(),
      schedule_option_one: this.schedule_option_one(),
      schedule_option_two: this.schedule_option_two(),
      class_cost: this.class_cost(),
      pan_road: this.pan_road(),
      regular_class_times: this.regular_class_times(),
      off_site_locations: this.off_site_locations()
    }));

    return this;
  }

});