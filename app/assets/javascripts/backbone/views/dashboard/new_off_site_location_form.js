var NewOffSiteLocationForm = Backbone.View.extend({

  initialize: function() {
    this.$el.appendTo("#for-attaching-form");
  },

  events: {
    'click #submit-new-os-location': function (e) {
      e.preventDefault();
      var english = $("input[name='off_site_location[location_english]']").val()
      var thai = $("input[name='off_site_location[location_thai]']").val()

      var locations = new OffSiteLocations();

      var promise = new Promise(function (resolve, reject) {
        resolve(
          locations.create({
            location_english: english,
            location_thai: thai
          })
        );
      });

      promise
      .then(function(loc) {
        location.reload();
        return loc;
      })
      .then(function(loc) {
        window.location.href = '/off_site_locations/new';
      })
      .catch(function(reason) {
        console.log("error");
        console.log(reason);
      });
    },
  },

  template:  HandlebarsTemplates['dashboard/new_off_site_location_form'],

  render: function() {
    var csrf_token = $('meta[name=csrf-token]').attr('content');
    this.$el.html(this.template({
      token: csrf_token
    }));

    var edit_off_site_location_form = new EditOffSiteLocation({collection: this.collection, model: this.model});
    edit_off_site_location_form.render();

    return this;
  }
});


