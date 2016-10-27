var VolunteerDashboardView = Backbone.View.extend({
  attributes: {
    id: "volunteer-dashboard"
  },

  initialize: function() {
    this.listenTo(this.model, 'sync', this.render);
    this.$el.appendTo(".entire");
    Handlebars.registerPartial('select_day', HandlebarsTemplates['dashboard/select_day']);
  },

  events: {
    'click .add-skype-slots': function (e) {
      e.preventDefault();
      this.removeErrorMsg();
      this.add_skype_slots();
    }
  },

  add_skype_slots: function() {
    var volunteer = this.model;
    var time_slots = [];
    var time_slot_1;
    var time_slot_2;
    var time_slot_3;
    var time_slot_4;

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
console.log("no time slots");
    }
    else if (!regex.test(time_slots[0] + time_slots[1] + time_slots[2])) {
      this.addErrorMsgToDOM();
console.log("failed regex!!");
    }
    else {
      if (time_slots.length === 3) {
        var time_slot_1 = new SkypeTimeSlot();
        time_slot_1.set({user_id: volunteer.get("id"), day: time_slots[0], time_period: time_slots[1], am_pm: time_slots[2]});
        time_slots = [time_slot_1];
        saveTimeSlots(time_slots);
      }
      else if (time_slots.length === 6) {
        var time_slot_1 = new SkypeTimeSlot();
        var time_slot_2 = new SkypeTimeSlot();
        time_slot_1.set({user_id: volunteer.get("id"), day: time_slots[0], time_period: time_slots[1], am_pm: time_slots[2]});
        time_slot_2.set({user_id: volunteer.get("id"), day: time_slots[3], time_period: time_slots[4], am_pm: time_slots[5]});
        time_slots = [time_slot_1, time_slot_2];
        saveTimeSlots(time_slots);
      }
      else if (time_slots.length === 9) {
        var time_slot_1 = new SkypeTimeSlot();
        var time_slot_2 = new SkypeTimeSlot();
        var time_slot_3 = new SkypeTimeSlot();
        time_slot_1.set({user_id: volunteer.get("id"), day: time_slots[0], time_period: time_slots[1], am_pm: time_slots[2]});
        time_slot_2.set({user_id: volunteer.get("id"), day: time_slots[3], time_period: time_slots[4], am_pm: time_slots[5]});
        time_slot_3.set({user_id: volunteer.get("id"), day: time_slots[6], time_period: time_slots[7], am_pm: time_slots[8]});
        time_slots = [time_slot_1, time_slot_2, time_slot_3];
        saveTimeSlots(time_slots);
      }
      else if (time_slots.length === 12) {
        var time_slot_1 = new SkypeTimeSlot();
        var time_slot_2 = new SkypeTimeSlot();
        var time_slot_3 = new SkypeTimeSlot();
        var time_slot_4 = new SkypeTimeSlot();
        time_slot_1.set({user_id: volunteer.get("id"), day: time_slots[0], time_period: time_slots[1], am_pm: time_slots[2]});
        time_slot_2.set({user_id: volunteer.get("id"), day: time_slots[3], time_period: time_slots[4], am_pm: time_slots[5]});
        time_slot_3.set({user_id: volunteer.get("id"), day: time_slots[6], time_period: time_slots[7], am_pm: time_slots[8]});
        time_slot_4.set({user_id: volunteer.get("id"), day: time_slots[9], time_period: time_slots[10], am_pm: time_slots[11]});
        time_slots = [time_slot_1, time_slot_2, time_slot_3, time_slot_4];
        saveTimeSlots(time_slots);
      }
    } // else

    var options = {
      success: function (model, response, options) {
        console.log(model);
        console.log(response);
        console.log(options);
        // $("#applicationmodal").modal("hide");
        // this.welcomePopupView = new WelcomePopupView({ model: model });
        // $("#welcomepopupmodal").html(this.welcomePopupView.render().el);
        // $("#welcomepopupmodal").modal();
      },
      error: function (model, response, options) {
        console.log(model);
        console.log(response);
        console.log(options);
        // $(".form-control").css("border-color", "#cccccc");
        // $("select").css("border-color", "#cccccc");
        // $("h4:contains('invalid')").remove();
        // $("h4:contains('choose')").remove();
        // $("h4:contains('option')").remove();
        // $("h4:contains('ควร')").remove();
        // $("h4:contains('อีเมล์')").remove();
        // $("h4.appended-nat-id-note").remove();

        // if (response.responseJSON) {
        //   response.responseJSON.errors.forEach(function(error) {
        //     if (error === "Nickname can't be blank") {
        //       $(".nickname").css("border-color", "red").attr("placeholder", "ควรกรอกชื่อเล่นลงในช่องว่าง");
        //     }
        //     else if (error === "Nickname is too long (maximum is 20 characters)") {
        //       $(".nickname").css("border-color", "red").attr("placeholder", "ชื่อเล่นยาวเกินไป (ไม่เกิน 20 ตัวอักษร)");
        //     }
        //   }); // forEach
        // } // if (response.responseJSON.errors)
      } // error:
    }; // options

    function saveTimeSlots(time_slots) {
      time_slots.forEach(save_each_time_slot);
      function save_each_time_slot(time_slot) {
  console.log(time_slot);
        time_slot.save({}, options);
      }
      App.removeNavAndPage();
      App.getVolunteerDashboardPage(volunteer);
    }


  }, // 'add_skype_slots' method

  removeErrorMsg: function() {
    $(".skype-red").remove();
  },

  addErrorMsgToDOM: function() {
    $(".button-for-skype").prepend("<h3 class='skype-red' style='color:red;'>You forgot some information for one or more of the Skype session time slots.</h3>");
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

    // this.$el.html(this.template({
    //   first_name: this.model.get("first_name"),
    //   volunteer_skype_time_slots: this.model.get("skype_time_slots")
    //   // volunteer_skype_time_slots: this.model.get("skype_time_slots");
    // }));
  } // render:

});


