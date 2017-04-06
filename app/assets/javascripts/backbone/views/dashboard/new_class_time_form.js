var NewClassTimeForm = Backbone.View.extend({

  initialize: function() {
    this.$el.appendTo("#for-attaching-form");
  },

  template:  HandlebarsTemplates['dashboard/new_class_time_form'],

  render: function() {
    var csrf_token = $('meta[name=csrf-token]').attr('content');
    this.$el.html(this.template({
      token: csrf_token
    }));

    var edit_class_time_form = new DeleteClassTime({collection: this.collection, model: this.model});
    edit_class_time_form.render();

    return this;
  }
});


