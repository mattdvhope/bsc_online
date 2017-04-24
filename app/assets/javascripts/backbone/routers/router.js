var Router = Backbone.Router.extend({

  routes: {
    "business": "showBusinessPage",
    "volunteer_info": "showVolunteerPage",
    "class_times/new": "showNewClassTimePage"
  },

  showBusinessPage: function() {
    $(window).scrollTop(0);
    App.getBusinessPage();      
  },

  showVolunteerPage: function() {
    $(window).scrollTop(0);
    App.getVolunteerPage();      
  },

  showNewClassTimePage: function() {
    App.getNewClassTimeView();      
  }

});
      


