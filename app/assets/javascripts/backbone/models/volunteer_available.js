var VolunteerAvailable = Backbone.Model.extend({

  // parse: function(attrs) {
  //   console.log(attrs);
  //   return attrs;
  // },

  urlRoot: 'volunteers_available' // Rails 'show' here is configured to ONLY provide the JSON of the volunteer's skype_time_slots -- not the user himself!

});