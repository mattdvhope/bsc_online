var VolunteerDashboardView = Backbone.View.extend({
  attributes: {
    id: "volunteer-dashboard"
  },

  initialize: function() {
    this.listenTo(this.model, 'sync', this.render);
    this.$el.appendTo(".entire");
    Handlebars.registerPartial('select_skype_time', HandlebarsTemplates['dashboard/select_skype_time']);
  },

  events: {
    'click #delete-skype-slot': "deleteSkypeTimeSlot",
    'click #add-skype-slots': function (e) {
      e.preventDefault();
      this.removeErrorMsg();
      this.add_skype_slots();
    },
    'click #open-to-add': function (e) {
      $("#choosing-many-slots").toggle();
    }
  },

  deleteSkypeTimeSlot: function(e) { // on 'skype_time_slots.hbs' template
    e.preventDefault();
    var slot = new SkypeTimeSlot({id: parseInt($(e.target)[0].dataset.id)});
    var promise = new Promise(function(resolve, reject) {
      resolve(slot.destroy());
    });

    promise
    .then(function(slot) {
      var skype_time_slots_view = new SkypeTimeSlotsView();
      skype_time_slots_view.render();
    })
    .catch(function(error) {
      console.log(error);
    });
  },

  add_skype_slots: function() {
    var view_context = this;
    var volunteer = this.model;
    var time_slot_parts = [];
    var time_slot_orders = [];
    this.$el.find('select[name]').each(function() {

      var selected = $(this).find('option:selected');
      if (selected.data('daythai')) {
        view_context.day_thai = selected.data('daythai')
      }
      if (selected.data('timethai')) {
        view_context.time_thai = selected.data('timethai')
      }
      var day = selected.data('orderday'); 
      if (day) {time_slot_orders.push(day)};
      var time = selected.data('ordertime'); 
      if (time) {time_slot_orders.push(time)};
      var am_pm = selected.data('orderam'); 
      if (am_pm) {time_slot_orders.push(am_pm)};

      time_slot_parts.push(this.value);
      var blanks_to_remove = time_slot_parts.indexOf("select_option");
      if (blanks_to_remove > -1) {
        time_slot_parts.splice(blanks_to_remove, 1);
      }
    }); // each

    var regex = /(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday)\d\d?:(00|30)\s-\s\d\d?:(00|30)(AM|PM)\sEST/
    if (time_slot_parts.length === 0) {
      this.addErrorMsgToDOM();
    }
    else if (!regex.test(time_slot_parts[0] + time_slot_parts[1] + time_slot_parts[2])) {
      this.addErrorMsgToDOM();
    }
    else {
      if (time_slot_parts.length === 3) {
        var time_slot = new SkypeTimeSlot();
        setThaiAttributes(time_slot, time_slot_parts[0], time_slot_parts[1], time_slot_parts[2]);
        time_slot.set({
          volunteer_id: volunteer.get("id"),
          day: time_slot_parts[0],
          time_period: time_slot_parts[1],
          am_pm: time_slot_parts[2],
          orderday: time_slot_orders[0],
          ordertime: time_slot_orders[1],
          orderam: time_slot_orders[2]
        });

        time_slot.save({}, {
          success: function (model, response, options) {
            view_context.renderTimeSlotView();
          },
          error: function (model, response, options) {
            console.log(response);
          }
        });
      }
    } // else
  }, // 'add_skype_slots' method

  removeErrorMsg: function() {
    $(".skype-red").remove();
  },

  addErrorMsgToDOM: function() {
    $(".button-for-skype").prepend("<h3 class='skype-red' style='color:red;'>You left out some information.</h3>");
  },

  renderTimeSlotView: function() {
    var skype_time_slots_view = new SkypeTimeSlotsView();
    skype_time_slots_view.render();
  },

  template:  HandlebarsTemplates['dashboard/volunteer_dashboard'],

  render: function() {
    this.$el.html(this.template({
      first_name: this.model.get("first_name"),
    }));

    this.renderTimeSlotView();
  }

});
