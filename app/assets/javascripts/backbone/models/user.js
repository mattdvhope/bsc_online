var User = Backbone.Model.extend({
  parse: function(attrs) {
    attrs.user_url = "/users/" + attrs.email;
    return attrs;
  },
  url : function() {
    var base = 'users';
    if (this.isNew()) return base;
    return base + (base.charAt(base.length - 1) == '/' ? '' : '/') + this.id;
  }
});