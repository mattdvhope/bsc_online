var User = Backbone.Model.extend({

  parse: function(attrs) {
    attrs.user_url = "/users/" + attrs.email;
    return attrs;
  },

  validate: function(attrs, options) {
    if (!attrs.email) {
      console.log('Please fill email.');
    }
  },

  urlRoot: 'users'

});