var MainThaiView = Backbone.View.extend({
  events: {
    "click a.english": "english"
  },

  templateMainThaiFront:  HandlebarsTemplates['front/main_thai'],
  render: function() {
    this.$el.html(this.templateMainThaiFront());
  },
  initialize: function() {
    this.$el.appendTo(".entire-main");
  },
  onScroll: function() {
      console.log("scroll");
  },
  english: function(e) {
    e.preventDefault();
    // this.fadeOut();
    history.back();
  }



});


