var NewClassTimeView = Backbone.View.extend({
  initialize: function() {
    this.$el.appendTo(".entire");
  },

  template:  HandlebarsTemplates['dashboard/new_class_time_page'],

  render: function() {
    var csrf_token = $('meta[name=csrf-token]').attr('content');
    this.$el.html(this.template({
      token: csrf_token,
    }));

    return this;
  }
});


