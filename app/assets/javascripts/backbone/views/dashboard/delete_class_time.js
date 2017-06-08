var DeleteClassTime = Backbone.View.extend({

  initialize: function() {
    this.$el.appendTo("#for-attaching-delete-class-times");
  },

  events: {
    'click #delete-class-time': "deleteClassTime"
  },

  deleteClassTime: function(e) { // on 'skype_time_slots.hbs' template
    e.preventDefault();
    var leader_user = this.model;
    var class_time = new ClassTime({id: parseInt($(e.target)[0].dataset.id)});

    var promise = new Promise(function(resolve, reject) {
      resolve(class_time.destroy({ url: "/class_times/" + class_time.get("id") }));
    });

    promise
    .then(function(class_time) {
      location.reload();
    })
    .catch(function(error) {
      console.log(error);
    });
  },

  template:  HandlebarsTemplates['dashboard/delete_class_time'],

  render: function() {
    var class_times = this.collection;
    this.$el.html(this.template({
      class_times: class_times,
    }));

    return this;
  }
});


