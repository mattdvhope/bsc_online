var User = Backbone.Model.extend({
  parse: function(attrs) {
console.log(attrs);

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
  },  
  validate: function (attrs) {
    var errors = [];
console.log("errors-begin: " + errors);

    if (!attrs.first_name) {
        errors.push({name: 'first_name', message: 'Please fill first name field.'});
    }
    if (!attrs.last_name) {
        errors.push({name: 'last_name', message: 'Please fill last name field.'});
    }
    // if (!attrs.occupation) {
    //     errors.push({name: 'occupation', message: 'Please fill occupation field.'});
    // }
    if (!attrs.email) {
        errors.push({name: 'email', message: 'Please fill email field.'});
    }
    if (!attrs.password) {
        errors.push({name: 'password', message: 'Please fill password field.'});
    }
    if (!attrs.password_confirmation) {
        errors.push({name: 'password_confirmation', message: 'Please fill password_confirmation field.'});
    }
    // if (!attrs.phone_number) {
    //     errors.push({name: 'phone_number', message: 'Please fill phone number field.'});
    // }
    // if (!attrs.address_1) {
    //     errors.push({name: 'address_1', message: 'Please fill address 1 field.'});
    // }
    // if (!attrs.city) {
    //     errors.push({name: 'city', message: 'Please fill city field.'});
    // }
    // if (!attrs.province) {
    //     errors.push({name: 'province', message: 'Please fill province field.'});
    // }
    if (!attrs.postal_code) {
        errors.push({name: 'postal_code', message: 'Please fill postal code field.'});
    }
    // if (!attrs.country) {
    //     errors.push({name: 'country', message: 'Please fill country field.'});
    // }
console.log("errors-end: " + errors);

    return errors.length > 0 ? errors : false;
  }

});
