# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#   Mayor.create(name: 'Emanuel', city: cities.first)
#
# cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])

bible_english    = Course.create(name: 'Bible English', description: 'Awesome course.  I know you will love it!')
business_english = Course.create(name: 'Business English', description: 'Great course.  I think you will love it!')
tourism_english = Course.create(name: 'Tourism English', description: 'Wonderful course.  I a sure you will love it!')

alex    = User.create(first_name: 'Alex', last_name: 'Blanton', email: 'alex@test.tv', password: 'password', password_confirmation: 'password', postal_code: 10501)
matt    = User.create(first_name: 'Matt', last_name: 'Malone', email: 'matt@test.tv', password: 'password', password_confirmation: 'password', postal_code: 10401)
tim     = User.create(first_name: 'Tim', last_name: 'Owens', email: 'tim@test.tv', password: 'password', password_confirmation: 'password', postal_code: 10301)
john    = User.create(first_name: 'John', last_name: 'Lapos', email: 'john@test.tv', password: 'password', password_confirmation: 'password', postal_code: 10201)
