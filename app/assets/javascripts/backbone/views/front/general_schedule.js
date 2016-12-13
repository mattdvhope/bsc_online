var GeneralScheduleView = Backbone.View.extend({

  events: {
    'click .close-sched-modal': function (e) {
      sessionStorage.setItem('genSched', 'closed');
    },
    'click a#appl-form-city': 'bring_appl_form'
  },

  bring_appl_form: function(event) {
    event.preventDefault();
    $("#generalschedulemodal").modal('hide');
    App.openApplicationForm();
    $("#applicationmodal").modal();
  },

  thai_language: function() {
    return sessionStorage.getItem('language') === "thai";
  },
  welcome: function() {
    return this.choose_language("Welcome to the CEP web app!", "ยินดีต้อนรับสู่ CEP เว็บแอป!");
  },

  list_title: function() {
    return this.choose_language("List of class sessions...", "รายการชั้นเรียน...");
  },

  class_times: function() {
    var using_thai_language = this.thai_language();
    var class_time_list = [];
    this.collection.forEach(function(element) {
      if (using_thai_language) {
        class_time_list.push(element.toJSON().period_thai);
      } else {
        class_time_list.push(element.toJSON().period);
      }
    });

    return class_time_list;
  },

  choose_language: function(english, thai) {
    if (this.thai_language()) {
      return thai
    } else {
      return english;
    }
  },

  template:  HandlebarsTemplates['front/general_schedule'],

  render: function() {
    this.$el.html(this.template({
      thai_language: this.thai_language(),
      welcome: this.welcome(),
      list_title: this.list_title(),
      class_times: this.class_times()
    }));

    return this;
  }

});

