var Router = Backbone.Router.extend({

  routes: {
    "business": "showBusinessPage",
    "volunteer_info": "showVolunteerPage",
    "off_site_locations/new": "showNewOffSiteLocationPage",
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

  showNewOffSiteLocationPage: function() {
    App.getNewOffSiteLocationView();      
  },

  showNewClassTimePage: function() {
    App.getNewClassTimeView();      
  }

});