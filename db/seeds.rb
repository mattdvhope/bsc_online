# Examples:
  # Mayor.create(name: 'Emanuel', city: cities.first)
  # cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])

bsc_core_thai = Curriculum.create(name: 'BSC Core Curriculum for Thais', description: 'This curriculum consists of 10 levels of English for daily life.  It is specifically designed for Thai students.')
bsc_special_thai = Curriculum.create(name: 'BSC Special Course Curriculum for Thais', description: 'This curriculum consists of various English for Specific Purpose courses.  It is specifically designed for Thai students.')

bible_english    = Course.create(curriculum_id: 2, name: 'Bible English', description: 'Awesome course.  I know you will love it...right now!!', activated: true)
business_english = Course.create(curriculum_id: 2, name: 'Business English', description: 'Great course.  I think you will love it...in the future!')
tourism_english = Course.create(curriculum_id: 2, name: 'Tourism English', description: 'Wonderful course.  I am sure you will love it...in the future!')
medical_english = Course.create(curriculum_id: 2, name: 'Medical English', description: 'Wonderful course.  I am sure you will enjoy it...in the future!')
level_0 = Course.create(curriculum_id: 1, name: 'Level 0', description: 'English for pre-beginner Thai students')
level_1 = Course.create(curriculum_id: 1, name: 'Level 1', description: 'English for low beginner Thai students')
level_2 = Course.create(curriculum_id: 1, name: 'Level 2', description: 'English for mid beginner Thai students')
level_3 = Course.create(curriculum_id: 1, name: 'Level 3', description: 'English for high beginner Thai students')
level_4 = Course.create(curriculum_id: 1, name: 'Level 4', description: 'English for low intermediate Thai students')
level_5 = Course.create(curriculum_id: 1, name: 'Level 5', description: 'English for mid intermediate Thai students')
level_6 = Course.create(curriculum_id: 1, name: 'Level 6', description: 'English for high intermediate Thai students')
level_7 = Course.create(curriculum_id: 1, name: 'Level 7', description: 'English for low advanced Thai students')
level_8 = Course.create(curriculum_id: 1, name: 'Level 8', description: 'English for mid advanced Thai students')
level_9 = Course.create(curriculum_id: 1, name: 'Level 9', description: 'English for high advanced Thai students')

alex    = User.create(first_name: 'Alex', last_name: 'Blanton', email: 'alex@test.tv', password: 'password', password_confirmation: 'password', postal_code: 10501)
matt    = User.create(first_name: 'Matt', last_name: 'Malone', email: 'matt@test.tv', password: 'password', password_confirmation: 'password', postal_code: 10401)
tim     = User.create(first_name: 'Tim', last_name: 'Owens', email: 'tim@test.tv', password: 'password', password_confirmation: 'password', postal_code: 10301)
john    = User.create(first_name: 'John', last_name: 'Lapos', email: 'john@test.tv', password: 'password', password_confirmation: 'password', postal_code: 10201)

core_for_matt = Plan.create(curriculum_id: 1, student_id: 2, description: "This is the BSC core curriculum consisting of ten levels.")
special_for_alex = Plan.create(curriculum_id: 2, student_id: 1, description: "This is the BSC special curriculum consisting of special courses.")
special_for_matt = Plan.create(curriculum_id: 2, student_id: 2, description: "This is the BSC special curriculum consisting of special courses.")
core_for_tim = Plan.create(curriculum_id: 1, student_id: 3, description: "This is the BSC core curriculum consisting of ten levels.")
special_for_john = Plan.create(curriculum_id: 2, student_id: 4, description: "This is the BSC special curriculum consisting of special courses.")

