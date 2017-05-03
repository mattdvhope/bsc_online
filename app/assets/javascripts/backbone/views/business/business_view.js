var BusinessPageView = Backbone.View.extend({
  initialize: function(options) {
    // this.refreshed = options.refreshed;
    this.$el.appendTo(".entire");
  },

  template:  HandlebarsTemplates['business/business'],

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

    this.$el.html(this.template({
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


