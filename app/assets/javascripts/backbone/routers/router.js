var Router = Backbone.Router.extend({

  routes: {
    "volunteer_info": "showVolunteerPage",
    "class_times/new": "showNewClassTimePage"
  },

  showVolunteerPage: function() {
    $(window).scrollTop(0);
    App.getVolunteerPage();      
  },

  showNewClassTimePage: function() {
    App.getNewClassTimeView();      
  }

});
      


