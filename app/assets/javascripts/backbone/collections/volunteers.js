var Volunteers = Backbone.Collection.extend({
  model: User,
  url: "/volunteers.json"
}); 