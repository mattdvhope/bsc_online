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
    var volunteer = this.model;
    var time_slot_parts = [];
    var view_context = this;

    this.$el.find('select[name]').each(function() {
      time_slot_parts.push(this.value);
      var blanks_to_remove = time_slot_parts.indexOf("select_option");
      if (blanks_to_remove > -1) {
        time_slot_parts.splice(blanks_to_remove, 1);
      }
    });

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
        time_slot.set({volunteer_id: volunteer.get("id"), day: time_slot_parts[0], time_period: time_slot_parts[1], am_pm: time_slot_parts[2]});
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
