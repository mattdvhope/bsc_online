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
      error.responseJSON.errors.forEach(function(error) {
        if (error === "Business name can't be blank") {
          $(".biz-name-input").css("border-color", "red").attr("placeholder", "ชื่อธุรกิจต้องไม่เว้นว่าง");
        }
        else if (error === "Phone can't be blank") {
          $(".phone-input").css("border-color", "red").attr("placeholder", "หมายเลขโทรศัพท์ต้องไม่เว้นว่าง");
        }
        else if (error === "Employees no is not a number") {
          $(".employees-no-input").css("border-color", "red").attr("placeholder", "นี่ต้องเป็นตัวเลข");
        }
      });

    });






  },

  business_title: function() {
    return choose_language("Business Title", "หน้าธุรกิจ");
  },
  
  business_name: function() {
    return choose_language("Business Name", "กกกกกกกกกกก");
  },
  business_address: function() {
    return choose_language("Business Address", "กกกกกกกกกกก");
  },
  leader_name: function() {
    return choose_language("Leader Name", "กกกกกกกกกกก");
  },
  employees_no: function() {
    return choose_language("Number of Employees", "กกกกกกกกกกก");
  },
  times: function() {
    return choose_language("Times", "กกกกกกกกกกก");
  },
  days: function() {
    return choose_language("Days", "กกกกกกกกกกก");
  },
  email: function() {
    return choose_language("Email Address", "กกกกกกกกกกก");
  },
  phone: function() {
    return choose_language("Phone Number", "กกกกกกกกกกก");
  },

  render: function() {

    var csrf_token = $('meta[name=csrf-token]').attr('content');
    this.$el.html(this.template({
      token: csrf_token,
      business_title: this.business_title(),
      business_name: this.business_name(),
      business_address: this.business_address(),
      leader_name: this.leader_name(),
      employees_no: this.employees_no(),
      times: this.times(),
      days: this.days(),
      email: this.email(),
      phone: this.phone(),



    }));

    return this;
  }
});


