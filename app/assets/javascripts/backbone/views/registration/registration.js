var $overlay = $("#overlay");

var RegFormView = Backbone.View.extend({
  attributes: {
    id: "entry_form_modal"
  },
  events: {
    "click a.close": "close"
  },
  duration: 300,
  templateStudentReg:  HandlebarsTemplates['registration/student_reg'],
  templateTeacherReg:  HandlebarsTemplates['registration/teacher_reg'],
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
      this.$el.html(this.templateStudentReg({
        token: csrf_token
      }));
      this.open(); // to fade the overlay in...
    } else if (person === "Teacher") {
      this.$el.html(this.templateTeacherReg({
        token: csrf_token
      }));
      this.open();
    }
  },
  initialize: function() {
    this.$el.appendTo(document.body);
  }
});





