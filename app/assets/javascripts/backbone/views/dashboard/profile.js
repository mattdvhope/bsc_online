var $overlay = $("#overlay");

var ProfileFormView = Backbone.View.extend({
  attributes: {
    id: "entry_form_modal"
  },
  events: {
    "click a.close": "close",
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
      this.highlightEmptyField("#user_note", "your note");
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
    App.loadProfileForm();
    history.back();
  },
  fadeOut: function() {
    App.allowBodyScrolling();
    $overlay.fadeOut(this.duration);
    this.$el.fadeOut(this.duration, function() {
      this.remove();
    }.bind(this));
  },
  render: function(user) {
// console.log(user);
    var csrf_token = $('meta[name=csrf-token]').attr('content');
    this.$el.html(this.templateProfile({
      token: csrf_token,
      first_name: user.first_name
    }));
    this.open(); // to fade the overlay in...
  },
  initialize: function() {
    this.$el.appendTo(document.body);
    this.listenTo(this.collection, "change", this.render);
  }
});





