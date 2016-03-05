var User = Backbone.Model.extend({
  parse: function(attrs) {
    attrs.user_url = "/users/" + attrs.email;
    return attrs;
  },
  url: "users", // for 'users#create...POST' 
  defaults: {
    'first_name': null,
    'last_name': null,
    'email': null,
    'password': null,
    'password_confirmation': null,
    'postal_code': null,
    'address_1': null,
    'address_2': null,
    'city': null,
    'sub_district': null,
    'district': null,
    'province': null,
    'city': null,
    'country': null,
    'phone_number': null,
    'age': 0,
    'gender': null,
    'occupation': null,
    'university_name': null,
    'religion': null,
    'studied_english_before?': false,
    'studied_english_how_long': 0,
    'interested_in_follow_up': null,
    'guest': false,
    'role_id': 0,
    'pin': null
  }

});
