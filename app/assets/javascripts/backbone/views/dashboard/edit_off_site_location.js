var EditOffSiteLocation = Backbone.View.extend({

  initialize: function() {
    this.$el.appendTo("#for-attaching-edit-off-site-locations");
  },

  events: {
    'click #archive-off-site-location': "archiveOffSiteLocation"
  },

  archiveOffSiteLocation: function(e) {
    e.preventDefault();
    var leader_user = this.model;
    var _id = parseInt($(e.target)[0].dataset.id);
    var off_site_location = new OffSiteLocation();

    var promise = new Promise(function(resolve, reject) {
      resolve(off_site_location.save({id: _id}, {patch: true}));
    });

    promise
    .then(function(off_site_location) {
      window.location.href = '/off_site_locations/new';
    })
    .catch(function(error) {
      console.log("error");
      console.log(error);
    });
  },

  template:  HandlebarsTemplates['dashboard/edit_off_site_location'],

  render: function() {
    var off_site_locations = this.collection;
    var not_completed = [];
    var completed = [];
    off_site_locations.forEach(function(loc) {
      if (loc.completed === true) {
        completed.push(loc)
      } else {
        not_completed.push(loc)
      }
    });

    not_completed.sort(function(a, b) {
      return parseFloat(a.timestamp) - parseFloat(b.timestamp);
    });
    completed.sort(function(a, b) {
      return parseFloat(a.timestamp) - parseFloat(b.timestamp);
    });

    this.$el.html(this.template({
      not_completed: not_completed,
      completed: completed
    }));

    return this;
  }
});


