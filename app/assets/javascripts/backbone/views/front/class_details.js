var ClassDetailsView = Backbone.View.extend({
  initialize: function() {},
  events: {},

  thank_you: function() {
    return choose_language("Thank you!", "ขอขอบคุณครับ!");
  },

  content: function() {
    return choose_language("We offer on-site \"You Can Speak!\" classes. If you would like to host one at your business or university, contact Khun So at 086-696-7821 or Line ID: cityenglishproject.", "เราให้บริการจัดชั้นเรียน \"You Can Speak!\" นอกสถานที่ หากคุณต้องการจัดชั้นเรียนในสถานที่ทำงานหรือสถานศึกษาของคุณ กรุณาติดต่อคุณโสภาพร โทร 086-696-7821 หรือ Line ID: cityenglishproject");
  },

  template:  HandlebarsTemplates['front/class_details'],

  render: function() {
    this.$el.html(this.template({
      thai_language: thai_language(),
      thank_you: this.thank_you(),
      content: this.content()
    }));

    return this;
  }

});

