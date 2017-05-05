var FreeEventsView = Backbone.View.extend({

  title: function() {
    return choose_language("City English Project Free Events!", "กิจกรรมฟรีของโครงการซิตี้ อิงลิช!");
  },

  description_of_free: function() {
    return choose_language("Description of free activities", "คำอธิบายสำหรับกิจกรรมฟรี");
  },

  template:  HandlebarsTemplates['front/free_events'],

  render: function() {
    this.$el.html(this.template({
      thai_language: thai_language(),
      title: this.title(),
      description_of_free: this.description_of_free()
    }));

    return this;
  }

});

