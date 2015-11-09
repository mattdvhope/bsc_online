var $overlay = $("#overlay");

var LogInFormView = Backbone.View.extend({
  attributes: {
    id: "log_in_form_modal"
  },
  events: {
    "click a.close": "close"
  },
  duration: 300,
  templateStudent:  HandlebarsTemplates['sessions/student_log_in'],
  templateTeacher:  HandlebarsTemplates['sessions/teacher_log_in'],
  open: function () {
    this.$el.add($overlay).fadeIn(this.duration);
  },
  close: function(e) {
    e.preventDefault();
    this.fadeOut();
    history.back();
  },
  fadeOut: function() {
    $overlay.fadeOut(this.duration);
    this.$el.fadeOut(this.duration, function() {
      this.remove();
    }.bind(this));
  },
  render: function(person) {
    var csrf_token = $('meta[name=csrf-token]').attr('content');

    if (person === "Student") {
      this.$el.html(this.templateStudent({
        token: csrf_token
      }));
      this.open(); // to fade the overlay in...
    } else if (person === "Teacher") {
      this.$el.html(this.templateTeacher({
        token: csrf_token
      }));
      this.open();
    }
  },
  initialize: function() {
    this.$el.appendTo(document.body);
  }
});





