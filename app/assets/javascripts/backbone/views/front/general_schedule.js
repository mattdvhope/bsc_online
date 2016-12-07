var GeneralScheduleView = Backbone.View.extend({

  events: {
    'click .close-sched-modal': function (e) {
      sessionStorage.setItem('genSched', 'closed');
    },
    'click a#appl-form-city': 'bring_appl_form'
  },

  bring_appl_form: function() {
    event.preventDefault();

    // $("#generalschedulemodal").modal('hide');
    sessionStorage.setItem('genSched', 'closed');
    location.reload();
    // $("#applicationmodal").modal();

// MAKE THIS DRY!!!!!!! (See 'main.hbs' & 'nav_bar.hbs'...put all three into App...or maybe a new file?? watch out for $("#applicationmodal").modal(); below though)
// Fix the application pop-up from the link (doesn't scroll on some browsers)...maybe place this js code in a <script> tag in .hbs ...maybe need a Promise for production environ
// Make link "Click here" much bigger font for mobile...

    var class_times_collection = new ClassTimes();
    class_times_collection.fetch({
      success: function (class_times) {
console.log(class_times);
        var student = new User();
        var class_times = class_times.toJSON().sort(function (a, b) {
          if (a.order_no > b.order_no) {
            return 1;
          }
          if (a.order_no < b.order_no) {
            return -1;
          }
          // a must be equal to b
          return 0;
        });
        this.applicationView = new ApplicationView({
          model: student,
          options: class_times
        });
        $("#applicationmodal").html(this.applicationView.render().el);
        $("#applicationmodal").modal();
      },
      error: function (collection, response, options) {
        console.log("error");
      }
    });

  },

  thai_language: function() {
    return sessionStorage.getItem('language') === "thai";
  },
  welcome: function() {
    return this.choose_language("Welcome!", "ยินดีต้อนรับ!");
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

