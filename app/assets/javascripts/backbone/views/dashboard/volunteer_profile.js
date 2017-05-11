var VolunteerProfileView = Backbone.View.extend({

  initialize: function(options) {
    this.options = options;
    _.bindAll(this, 'render');
  },

  // events: {
  //   'click #connect-with-volunteer': function (e) {
  //     $('#volunteerprofile').modal('hide');
  //     var volunteer_id = $(e.target)[0].dataset.id;
  //     var volunteer_first_name = $(e.target)[0].dataset.firstname;
  //     var volunteer_last_name = $(e.target)[0].dataset.lastname;
  //     var volunteer = new User({id: volunteer_id});
  //     volunteer.fetch({
  //       success: function (model, response, options) {
  //         console.log("success");
  //         swal({
  //           title: "Thank you!", //"สวัสดีครับ -- Thank you for connecting with the CEP Skype teacher!",
  //           text: volunteer_first_name + " " + volunteer_last_name + " จะได้รับอีเมลจากโครงการซิตี้ อิงลิช ที่มีชื่อและอีเมลของคุณอยู่ในนั้น และเราจะติดต่อคุณกลับเร็วๆ นี้",
  //           timer: 20000,
  //           showConfirmButton: true,
  //           animation: "slide-from-top"
  //         });
  //         console.log(model);
  //         // $("entire-main").html(model.get("first_name"));

  //       },
  //       error: function (model, response, options) {
  //         console.log("error");
  //         swal({
  //           title: "Error with database",
  //           text: "Please click on the same person's name again.",
  //           timer: 20000,
  //           showConfirmButton: true,
  //           animation: "slide-from-top"
  //         });
  //         console.log(response);
  //       }
  //     });
  //   }
  // },

  template:  HandlebarsTemplates['dashboard/volunteer_profile'],

  render: function() {
    this.$el.html(this.template({
      first_name: this.model.toJSON().first_name,
      last_name: this.model.toJSON().last_name,
    }));

    return this;
  }
});
