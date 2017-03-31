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
    },
    "change #number-of-slots": 'changeVolunteerSlotNumber'
  },

  // changeVolunteerSlotNumber: function() {
  //   var view_context = this;
  //   var number_of_slots_avail = parseInt($('select[name=number-of-slots]').val());
  //   var volunteer = new User({id: this.model.get("id"), number_of_slots: number_of_slots_avail});

  //   var promise = new Promise(function(resolve, reject) {
  //     resolve(volunteer.save(volunteer.toJSON(), {patch: true}));
  //   });

  //   promise
  //   .then(function(volunteer_obj) {
  //     $("#current-numbers-slots").remove();
  //     if (volunteer_obj.number_of_slots == 0) {
  //       $("#volunteer-welcome").append("<h4 id='current-numbers-slots'>You have currently decided to be available for 0 Skype-partner time slots out of your total number of Skype-partner time slots (below), but you can change/edit that below.</h4>")
  //     } else {
  //       $("#volunteer-welcome").append("<h4 id='current-numbers-slots'>You have currently decided to be available for " + volunteer_obj.number_of_slots + " out of your total number of Skype-partner time slots (below), but you can change/edit that below.</h4>")
  //     }
  //     $("#skype-time-partial").remove();
  //   })
  //   .catch(function(error) {
  //     console.log(error);
  //   });
  // },

  deleteSkypeTimeSlot: function(e) { // on 'skype_time_slots.hbs' template
    e.preventDefault();
    var view_context = this;
    var slot = new SkypeTimeSlot({id: parseInt($(e.target)[0].dataset.id)});
    var promise = new Promise(function(resolve, reject) {
      resolve(slot.destroy());
    });

    promise
    .then(function(slot) {
      view_context.renderTimeSlotView();
      return view_context.model;
    })
    .then(function(volunteer) {
      var volunteer = new User({id: volunteer.get("id"), number_of_slots: 0});
      volunteer.save();
      $("#current-numbers-slots").remove();
      $("#volunteer-welcome").append("<h4 id='current-numbers-slots'>You have currently decided to be available for 0 Skype-partner time slots (because you deleted a slot) out of your total number of Skype-partner time slots (below), but you can change/edit that below.</h4>")
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

    if (time_slot_parts.length === 4) { 
      time_slot_parts.pop(); // to remove 'number_of_slots' when it is selected; keeps time_slot_parts.length equal to 3
    }

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
// console.log(model);
            view_context.renderTimeSlotView();
          },
          error: function (model, response, options) {
// console.log(response);
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
    var skype_time_slots_view = new SkypeTimeSlotsView({model: this.model});
    skype_time_slots_view.render();
  },

  template:  HandlebarsTemplates['dashboard/volunteer_dashboard'],

  render: function() {
    this.$el.html(this.template({
      volunteer: this.model.toJSON(),
      one_slot: this.model.toJSON().number_of_slots == 1
    }));

    this.renderTimeSlotView();

    return this;
  }

});
