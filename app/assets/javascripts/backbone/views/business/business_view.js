var BusinessPageView = Backbone.View.extend({
  initialize: function(options) {
    // this.refreshed = options.refreshed;
    this.$el.appendTo(".entire");
  },

  template:  HandlebarsTemplates['business/business'],

  events: {
    'click .biz-button': function (e) {
      e.preventDefault();
      this.submit_biz();
    },
    'click #home-point': function (e) {
      App.getFrontMainPage();
    }

  },

  submit_biz: function() {
    var model = new Business();

    this.$el.find('input[name]').each(function() {
      if (!((this.name === "utf8") || (this.name === "authenticity_token"))) {
        model.set(this.name, this.value);
      }
    });
    console.log(model.toJSON());

    var promise = new Promise(function(resolve, reject) {
      resolve(model.save());
    });

    promise
    .then(function(model_object) {
      console.log(model_object);
      App.getFrontMainPage();
      swal({
        title: "ขอขอบคุณครับ!",
        text: "เราจะติดต่อคุณเร็ว ๆ นี้",
        timer: 20000,
        showConfirmButton: true,
        animation: "slide-from-bottom"
      });


    })
    .catch(function(error) {
      console.log(error.responseJSON);
      $("h4:contains('อีเมล์')").remove();
      $("h4:contains('หมายเลขโทรศัพท์')").remove();
      $(".form-control").css("border-color", "#cccccc");

      error.responseJSON.errors.forEach(function(error) {
        if (error === "Business name can't be blank") {
          $(".biz-name-input").css("border-color", "red").attr("placeholder", "ชื่อธุรกิจต้องไม่เว้นว่าง");
        }
        else if (error === "Phone can't be blank") {
          $(".phone-input").css("border-color", "red").attr("placeholder", "หมายเลขโทรศัพท์ต้องไม่เว้นว่าง");
        }
        else if (error === "Phone is invalid") {
          $(".phone-input").css("border-color", "red").attr("placeholder", "หมายเลขโทรศัพท์ต้องไม่เว้นว่าง");
          $(".phone-label").append("<h4 style='color:red;'>หมายเลขโทรศัพท์นี้ไม่สามารถใช้งานได้</h4>");
          $(".phone-input").css("border-color", "red");
        }
        else if (error === "Leader name can't be blank") {
          $(".leader-name-input").css("border-color", "red").attr("placeholder", "ชื่อของคุณต้องไม่เว้นว่าง");
        }
        else if (error === "Email can't be blank") {
          $(".email-input").css("border-color", "red").attr("placeholder", "ควรกรอกอีเมล์ลงในช่องว่าง");
        }
        else if (error === "Email is invalid") {
          $(".email-label").append("<h4 style='color:red;'>อีเมล์นี้ไม่สามารถใช้งานได้</h4>");
          $(".email-input").css("border-color", "red");
        }
        else if (error === "Email has already been taken") {
          $(".email-label").append("<h4 style='color:red;'>อีเมล์นี้มีผู้ใช้อยู่แล้ว</h4>");
          $(".email-input").css("border-color", "red");
        }
      });

    });
  },

  home_page: function() {
    return choose_language("Return to home page", "กลับไปยังหน้าหลัก");
  },
  organization_name: function() {
    return choose_language("Name of your business, university, organization, etc", "ชื่อบริษัท มหาวิทยาลัย หรือองค์กรของคุณ");
  },
  leader_name: function() {
    return choose_language("Your Name", "ชื่อของคุณ");
  },
  email: function() {
    return choose_language("Email Address", "ที่อยู่อีเมล");
  },
  phone: function() {
    return choose_language("Phone Number", "หมายเลขโทรศัพท์");
  },
  line_id: function() {
    return choose_language("Line ID (not required)", "Line ID (ไม่จำเป็นต้องกรอก)");
  },

  render: function() {

    var csrf_token = $('meta[name=csrf-token]').attr('content');
    this.$el.html(this.template({
      token: csrf_token,
      thai_language: thai_language(),
      home_page: this.home_page(),
      organization_name: this.organization_name(),
      leader_name: this.leader_name(),
      email: this.email(),
      phone: this.phone(),
      line_id: this.line_id()
    }));

    return this;
  }
});


