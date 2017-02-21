var GeneralScheduleView = Backbone.View.extend({

  events: {
    'click .close-sched-modal': function (e) {
      sessionStorage.setItem('genSched', 'closed');
    },
    'click a#appl-form-city': 'bring_appl_form'
  },

  bring_appl_form: function(event) {
    event.preventDefault();
    // $("#generalschedulemodal").modal('hide');
    App.openApplicationForm();
    $("#applicationmodal").modal();
  },

  welcome: function() {
    return choose_language("Welcome to the CEP web app!", "ยินดีต้อนรับสู่ CEP เว็บแอป!");
  },

  list_title: function() {
    return choose_language("List of class sessions...", "รายการชั้นเรียน...");
  },

  sorted_class_times: function() {
    return this.collection.toJSON().sort(function(a, b) {
      return a.order_no - b.order_no;
    });
  },

  class_times: function() {
    var using_thai_language = thai_language();
    var class_time_list = [];
    this.sorted_class_times().forEach(function(time) {
      if (using_thai_language) {
        class_time_list.push(time.period_thai);
      } else {
        class_time_list.push(time.period);
      }
    });

    return class_time_list;
  },

  template:  HandlebarsTemplates['front/general_schedule'],

  render: function() {
    this.$el.html(this.template({
      thai_language: thai_language(),
      welcome: this.welcome(),
      list_title: this.list_title(),
      class_times: this.class_times()
    }));

    return this;
  }

});

