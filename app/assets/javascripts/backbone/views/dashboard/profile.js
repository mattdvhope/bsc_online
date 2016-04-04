var $overlay = $("#overlay");

var ProfileFormView = Backbone.View.extend({
  attributes: {
    id: "entry_form_modal"
  },
  events: {
    "click a.close": "close",
    "click a.btn-success": "close",
    "click a.btn-warning": "close",
    "click input.student_reg_er": "checkInputs"
  },
  duration: 300,
  templateProfile:  HandlebarsTemplates['dashboard/profile'],
  open: function () {
    this.$el.add($overlay).fadeIn(this.duration);
  },
  checkInputs: function(e) {
    $(".profile").css("border-color", "blue");
    var someEmpty = $('.profile').filter(function(){
      return $.trim(this.value).length === 0;
    }).length > 0;

    if (someEmpty) {
      e.preventDefault();
      this.highlightEmptyField("#volunteer_note", "your note");
    }
  },
  highlightEmptyField: function(input_id, text) {
    if ($(input_id).val() === "") {
      $(input_id).css("border-color", "red").attr("placeholder", "You must enter " + text);
    }
  },
  close: function(e) {
    e.preventDefault();
    this.fadeOut();
    history.back();
  },
  fadeOut: function() {
    App.allowBodyScrolling();
    $overlay.fadeOut(this.duration);
    this.$el.fadeOut(this.duration, function() {
      this.remove();
    }.bind(this));
  },
  render: function(volunteer, student) {
    var csrf_token = $('meta[name=csrf-token]').attr('content');
    var gender = volunteer.gender
    var pronoun;
    if (gender === "male") {
      pronoun = "him";
      gender = "man";
    } else if (gender === "female") {
      pronoun = "her";
      gender = "woman";
    } else if (gender === "ผู้ชาย") {
      pronoun = "him";
      gender = "man";
    } else if (gender === "ผู้หญิง") {
      pronoun = "her";
      gender = "woman";
    }
    this.$el.html(this.templateProfile({
      token: csrf_token,
      first_name: volunteer.first_name,
      last_name: volunteer.last_name,
      gender: gender,
      age: volunteer.age,
      pronoun: pronoun,
      volunteer: volunteer,
      student: student
    }));
    this.open(); // to fade the overlay in...
  },
  initialize: function() {
    this.$el.appendTo(document.body);
    // this.listenTo(this.collection, "change", this.render);
  }
});





