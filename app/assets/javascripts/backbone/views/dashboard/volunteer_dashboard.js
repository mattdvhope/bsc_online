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
    'click #add-skype-slots': function (e) {
      e.preventDefault();
      this.removeErrorMsg();
      this.add_skype_slots();
    },
    'click #open-to-add': function (e) {
      $("#choosing-many-slots").toggle();
    }
  },

  add_skype_slots: function() {
    var volunteer = this.model;
    var time_slots = [];
    var time_slot;

    this.$el.find('select[name]').each(function() {
      time_slots.push(this.value);
      var blanks_to_remove = time_slots.indexOf("select_option");
      if (blanks_to_remove > -1) {
        time_slots.splice(blanks_to_remove, 1);
      }
    });

    var regex = /(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday)\d\d?:(00|30)\s-\s\d\d?:(00|30)(AM|PM)\sEST/
    if (time_slots.length === 0) {
      this.addErrorMsgToDOM();
    }
    else if (!regex.test(time_slots[0] + time_slots[1] + time_slots[2])) {
      this.addErrorMsgToDOM();
    }
    else {
      if (time_slots.length === 3) {
        var time_slot = new SkypeTimeSlot();
        time_slot.set({user_id: volunteer.get("id"), day: time_slots[0], time_period: time_slots[1], am_pm: time_slots[2]});
        time_slot.save({}, {
          success: function (model, response, options) {
            var skype_time_slots = new SkypeTimeSlotsView();
            skype_time_slots.render();
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

  template:  HandlebarsTemplates['dashboard/volunteer_dashboard'],

  render: function() {
    var view_context = this;
    var collection = new SkypeTimeSlots();
    collection.fetch({
      success: function (collection, response, options) {
        var time_slots = [];
        collection.forEach(function(skypetimeslot) {
          time_slots.push(skypetimeslot.get("day") + " " + skypetimeslot.get("time_period") + " " + skypetimeslot.get("am_pm"));
        });
        function noTimeSlots() {
          return collection.length === 0;
        }

        view_context.$el.html(view_context.template({
          first_name: view_context.model.get("first_name"),
          no_time_slots: noTimeSlots(),
          time_slots: time_slots
        }));
      },
      error: function (collection, response, options) {
        console.log("error");
      }
    });
  } // render:

});
