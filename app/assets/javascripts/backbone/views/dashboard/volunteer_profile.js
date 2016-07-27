var VolunteerProfileView = Backbone.View.extend({
  attributes: {
    id: "volunteer-profile"
  },

  template:  HandlebarsTemplates['dashboard/volunteer_profile'],

  render: function() {
    var csrf_token = $('meta[name=csrf-token]').attr('content');
console.log(this.model.toJSON());
    // var gender = volunteer.gender
    // var pronoun;
    // if (gender === "male") {
    //   pronoun = "him";
    //   gender = "man";
    // } else if (gender === "female") {
    //   pronoun = "her";
    //   gender = "woman";
    // } else if (gender === "ผู้ชาย") {
    //   pronoun = "him";
    //   gender = "man";
    // } else if (gender === "ผู้หญิง") {
    //   pronoun = "her";
    //   gender = "woman";
    // }
    this.$el.html(this.template({
      // token: csrf_token,
      first_name: this.model.toJSON().first_name,
      last_name: this.model.toJSON().last_name,
      // gender: gender,
      // age: volunteer.age,
      // pronoun: pronoun,
      // volunteer: volunteer,
      // student: student
    }));

    return this;
  }
});





