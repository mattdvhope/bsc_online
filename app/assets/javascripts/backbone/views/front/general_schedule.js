var GeneralScheduleView = Backbone.View.extend({

  events: {
    'click .close-sched-modal': function (e) {
      sessionStorage.setItem('genSched', 'closed');
    },
    'click a#appl-form-city': 'bring_appl_form',
    'click .collapsable-free-ev': function (e) {
      $('.collapse').collapse('toggle');
    }
  },

  bring_appl_form: function(event) {
    event.preventDefault();
    App.openApplicationForm();
    $("#applicationmodal").modal();
  },

  welcome: function() {
    return choose_language("Schedule of all activities & classes", "ตารางสำหรับชั้นเรียนและกิจกรรมทั้งหมด");
  },

  description_of_free: function() {
    return choose_language("Description of free activities", "คำอธิบายสำหรับกิจกรรมฟรี");
  },

  list_title: function() {
    return choose_language("List of class sessions...", "รายการชั้นเรียน...");
  },

  please_click_here: function() {
    return choose_language("Description of these classes", "คำอธิบายสำหรับชั้นเรียนเหล่านี้");
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
      description_of_free: this.description_of_free(),
      list_title: this.list_title(),
      please_click_here: this.please_click_here(),
      class_times: this.class_times()
    }));

    return this;
  }

});

