var StudentRegFormView = Backbone.View.extend({
  attributes: {
    id: "student-registration-modal"
  },

  events: {
    "click .student-registration-submit": function (e) {
      e.preventDefault();
      this.submit();
    }
  },

  submit: function() {
    var model = this.model // Session
    model.set({
      pin: this.$("input[name='pin']").val(),
      nickname: this.$("input[name='nickname']").val(),
      first_name: this.$("input[name='first_name']").val(),
      last_name: this.$("input[name='last_name']").val(),
      gender: this.$("select[name='gender']").val(),
      skype_address: this.$("input[name='skype_address']").val(),
      email: this.$("input[name='email']").val(),
      national_id: this.$("input[name='national_id']").val(),
      age: this.$("input[name='age']").val(),
      phone_number: this.$("input[name='phone_number']").val(),
      password: this.$("input[name='password']").val(),
      password_confirmation: this.$("input[name='password_confirmation']").val(),
    });

    var options = { // need PROMISE HERE!!! ..TO HAVE ACCESS TO (NEW) USER; first 'user' needs to SAVE (& enter a SESSION!!) and THEN we getStudentDashboardPage...the problem here is an attempted "success within a success (in App)" which just doesn't work!
      success: function (model, response, options) {
        $("#registerstudentmodal").modal("hide");
        App.removeNavAndPage();
        App.getStudentDashboardPage(model);
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

        if (response.responseJSON) {
          if (response.responseJSON["errors"] === "Incorrect PIN") {
            $(".pin").css("border-color", "red");
            $(".pin-label").append("<h4 class='appended-pin-note' style='color:red;'>PIN นี้ไม่สามารถใช้งานได้</h4>");
            $("#submit-input-button").prepend("<h4 class='appended-pin-note' style='color:red;'>PIN นี้ไม่สามารถใช้งานได้</h4>");
          }
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
            else if (error === "Skype name can't be blank") {
              $(".skype-address").css("border-color", "red").attr("placeholder", "ควรกรอกที่อยู่ Skype ลงในช่องว่าง");
            }
            else if (error === "Email can't be blank") {
              $(".email").css("border-color", "red").attr("placeholder", "ควรกรอกอีเมล์ลงในช่องว่าง");
            }
            else if (error === "Email is invalid") {
              $(".email-label").append("<h4 style='color:red;'>อีเมล์นี้ไม่สามารถใช้งานได้</h4>");
            }
            else if (error === "Email has already been taken") {
              $(".email-label").append("<h4 style='color:red;'>อีเมล์นี้มีผู้ใช้อยู่แล้ว</h4>");
            }
            else if (error === "Password can't be blank") {
              $(".password").css("border-color", "red").attr("placeholder", "ควรกรอกรหัสผ่านลงในช่องว่าง");
            }
            else if (error === "Password is too short (minimum is 6 characters)") {
              $(".password").css("border-color", "red");
              $(".password-label").append("<h4 class='appended-pass' style='color:red;'>รหัสผ่านสั้นเกินไป(ขั้นต่ำ 6 ตัวอักษร)</h4>");
            }
            else if (error === "Password confirmation can't be blank") {
              $(".password-confirmation").css("border-color", "red").attr("placeholder", "ควรกรอกการยืนยันรหัสผ่านลงในช่องว่าง");
            }
            else if (error === "Password confirmation doesn't match Password") {
              $(".password-confirmation").css("border-color", "red");
              $(".password-conf-label").append("<h4 class='appended-pass-conf' style='color:red;'>Password confirmation doesn't match Password</h4>");
            }
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
          }); // forEach
        } // if (response.responseJSON.errors)
      } // error:
    }

    model.save({}, options);
  }, // 'submit' method

  templateStudentReg:  HandlebarsTemplates['registration/student_reg'],

  render: function() {
    var csrf_token = $('meta[name=csrf-token]').attr('content');
    this.$el.html(this.templateStudentReg({
      thai_language: thai_language(),
      token: csrf_token
    }));

    return this;
  }

});





