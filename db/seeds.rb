# Examples:
  # Mayor.create(name: 'Emanuel', city: cities.first)
  # cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])

bsc_core_thai = Curriculum.create(name: 'BSC Core Courses for Thais', description: 'This curriculum consists of 10 levels of English for daily life.  It is specifically designed for Thai students.')
bsc_special_thai = Curriculum.create(name: 'BSC Special Courses for Thais', description: 'This curriculum consists of various English for Specific Purpose courses.  It is specifically designed for Thai students.')

bible_english    = Course.create(curriculum_id: 2, name: 'Bible English', description: 'Awesome course.  I know you will love it...right now!!', activated: true)
business_english = Course.create(curriculum_id: 2, name: 'Business English', description: 'Great course.  I think you will love it...in the future!', activated: true)
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

alex    = User.create(first_name: 'Alex', last_name: 'Blanton', email: 'alex@test.tv', password: 'password', password_confirmation: 'password', postal_code: '10501')
matt    = User.create(first_name: 'Matt', last_name: 'Malone', email: 'matt@test.tv', password: 'password', password_confirmation: 'password', postal_code: '10401')
tim     = User.create(first_name: 'Tim', last_name: 'Owens', email: 'tim@test.tv', password: 'password', password_confirmation: 'password', postal_code: '10301')
john    = User.create(first_name: 'John', last_name: 'Lapos', email: 'john@test.tv', password: 'password', password_confirmation: 'password', postal_code: '10201')

core_for_matt = Plan.create(curriculum_id: 1, student_id: 2, description: "Matt, this plan for you consists of the following courses for which you have registered for from curriculum1.")
special_for_alex = Plan.create(curriculum_id: 2, student_id: 1, description: "Alex, this plan for you consists of the following courses for which you have registered for from curriculum2.")
special_for_matt = Plan.create(curriculum_id: 2, student_id: 2, description: "Matt, this plan for you consists of the following courses for which you have registered for from curriculum2.")
core_for_tim = Plan.create(curriculum_id: 1, student_id: 3, description: "Tim, this plan for you consists of the following courses for which you have registered for from curriculum1.")
special_for_john = Plan.create(curriculum_id: 2, student_id: 4, description: "John, this plan for you consists of the following courses for which you have registered for from curriculum2.")

part_1 = Part.create(course_id: 1, name: "Part 1")
part_2 = Part.create(course_id: 1, name: "Part 2")
part_3 = Part.create(course_id: 1, name: "Part 3")
part_4 = Part.create(course_id: 1, name: "Part 4")

creation = Lesson.create(part_id: 1, name: "พระผู้สร้าง", description: "The biblical account of how the world was created.")
sin = Lesson.create(part_id: 1, name: "บาปเข้าเอเดน", description: "The first sin that entered into the world after creation.")
abraham = Lesson.create(part_id: 1, name: "ชายชราผู้ศรัทธาต่อพระเจ้า", description: "An old man who followed God.  The account of Abraham's life.")
david = Lesson.create(part_id: 1, name: "กษัตริย์เดวิด", description: "The life of young King David of Israel.")
bathsheeba = Lesson.create(part_id: 1, name: "เดวิดกับบัทเชบา", description: "King David's sin with Bathsheeba and Uriah.")

nathan = Lesson.create(part_id: 2, name: "เรื่อง ของนาธาน", description: "Nathan's story to King David.")
birth = Lesson.create(part_id: 2, name: "การให้กำเนิดพระเยซู", description: "The birth of Jesus Christ.")
baptism = Lesson.create(part_id: 2, name: "พระเยซูรับบัพติศมา", description: "The baptism of Jesus Christ.")
exorcism = Lesson.create(part_id: 2, name: "พระเยซูรักษาคนถูกผีสิ", description: "Jesus delivers someone from an evil spirit.")
blind = Lesson.create(part_id: 2, name: "พระเยซูรักษาคนตาบอด", description: "Jesus heals a blind man.")

creation_story_100 = Story.create(lesson_id: 1, lesson_language_version: "Creation - 100% Thai", content: "100 - เกี่ยวกับพระผู้สร้างและอื่นๆ อีก", audio: File.open("/Users/matthewmalone/Sites/bsc_online/public/uploads/Track1-ogg.ogg"))
creation_story_70 = Story.create(lesson_id: 1, lesson_language_version: "Creation - English & 70% Thai translation", content: "70 - เกี่ยวกับพระผู้สร้างและอื่นๆ อีก", audio: "Audio 70")
creation_story_50 = Story.create(lesson_id: 1, lesson_language_version: "Creation - English & 50% Thai translation", content: "50 - เกี่ยวกับพระผู้สร้างและอื่นๆ อีก", audio: "Audio 50")
creation_story_20 = Story.create(lesson_id: 1, lesson_language_version: "Creation - English & 20% Thai translation", content: "20 - เกี่ยวกับพระผู้สร้างและอื่นๆ อีก", audio: "Audio 20")
creation_story_0 = Story.create(lesson_id: 1, lesson_language_version: "Creation - English & 0% Thai translation", content: "0 - เกี่ยวกับพระผู้สร้างและอื่นๆ อีก", audio: "Audio 0")

sin_story_100 = Story.create(lesson_id: 2, lesson_language_version: "Sin - 100% Thai", content: "100 - เกี่ยวกับบาปเข้าเอเดนและอื่นๆ อีก", audio: "Audio 100")
sin_story_70 = Story.create(lesson_id: 2, lesson_language_version: "Sin - English & 70% Thai", content: "70 - เกี่ยวกับบาปเข้าเอเดนและอื่นๆ อีก", audio: "Audio 70")
sin_story_50 = Story.create(lesson_id: 2, lesson_language_version: "Sin - English & 50% Thai", content: "50 - เกี่ยวกับบาปเข้าเอเดนและอื่นๆ อีก", audio: "Audio 50")
sin_story_20 = Story.create(lesson_id: 2, lesson_language_version: "Sin - English & 20% Thai", content: "20 - เกี่ยวกับบาปเข้าเอเดนและอื่นๆ อีก", audio: "Audio 20")
sin_story_0 = Story.create(lesson_id: 2, lesson_language_version: "Sin - English & 0% Thai", content: "0 - เกี่ยวกับบาปเข้าเอเดนและอื่นๆ อีก", audio: "Audio 0")

abraham_story_100 = Story.create(lesson_id: 3, lesson_language_version: "Abraham - 100% Thai", content: "100 - ชายชราผู้ศรัทธาต่อพระเจ้าและอื่นๆ อีก", audio: "Audio 100")
abraham_story_70 = Story.create(lesson_id: 3, lesson_language_version: "Abraham - English & 70% Thai", content: "70 - ชายชราผู้ศรัทธาต่อพระเจ้าและอื่นๆ อีก", audio: "Audio 70")
abraham_story_50 = Story.create(lesson_id: 3, lesson_language_version: "Abraham - English & 50% Thai", content: "50 - ชายชราผู้ศรัทธาต่อพระเจ้าและอื่นๆ อีก", audio: "Audio 50")
abraham_story_20 = Story.create(lesson_id: 3, lesson_language_version: "Abraham - English & 20% Thai", content: "20 - ชายชราผู้ศรัทธาต่อพระเจ้าและอื่นๆ อีก", audio: "Audio 20")
abraham_story_0 = Story.create(lesson_id: 3, lesson_language_version: "Abraham - English & 0% Thai", content: "0 - ชายชราผู้ศรัทธาต่อพระเจ้าและอื่นๆ อีก", audio: "Audio 0")

david_story_100 = Story.create(lesson_id: 4, lesson_language_version: "David - 100% Thai", content: "100 - เกี่ยวกับกษัตริย์เดวิดและอื่นๆ อีก", audio: "Audio 100")
david_story_70 = Story.create(lesson_id: 4, lesson_language_version: "David - 70% Thai", content: "70 - เกี่ยวกับกษัตริย์เดวิดและอื่นๆ อีก", audio: "Audio 70")
david_story_50 = Story.create(lesson_id: 4, lesson_language_version: "David - 50% Thai", content: "50 - เกี่ยวกับกษัตริย์เดวิดและอื่นๆ อีก", audio: "Audio 50")
david_story_20 = Story.create(lesson_id: 4, lesson_language_version: "David - 20% Thai", content: "20 - เกี่ยวกับกษัตริย์เดวิดและอื่นๆ อีก", audio: "Audio 20")
david_story_0 = Story.create(lesson_id: 4, lesson_language_version: "David - 0% Thai", content: "0 - เกี่ยวกับกษัตริย์เดวิดและอื่นๆ อีก", audio: "Audio 0")

bathsheeba_story_100 = Story.create(lesson_id: 5, lesson_language_version: "Bathsheeba - 100% Thai", content: "100 - เกี่ยวกับเดวิดกับบัทเชบาและอื่นๆ อีก", audio: "Audio 100")
bathsheeba_story_70 = Story.create(lesson_id: 5, lesson_language_version: "Bathsheeba - English & 70% Thai", content: "70 - เกี่ยวกับเดวิดกับบัทเชบาและอื่นๆ อีก", audio: "Audio 70")
bathsheeba_story_50 = Story.create(lesson_id: 5, lesson_language_version: "Bathsheeba - English & 50% Thai", content: "50 - เกี่ยวกับเดวิดกับบัทเชบาและอื่นๆ อีก", audio: "Audio 50")
bathsheeba_story_20 = Story.create(lesson_id: 5, lesson_language_version: "Bathsheeba - English & 20% Thai", content: "20 - เกี่ยวกับเดวิดกับบัทเชบาและอื่นๆ อีก", audio: "Audio 20")
bathsheeba_story_0 = Story.create(lesson_id: 5, lesson_language_version: "Bathsheeba - English & 0% Thai", content: "0 - เกี่ยวกับเดวิดกับบัทเชบาและอื่นๆ อีก", audio: "Audio 0")


creation_conversation_100 = Conversation.create(lesson_id: 1, lesson_language_version: "Creation Conversation - 100% Thai", content: "100 - เกี่ยวกับพระผู้สร้างและอื่นๆ อีก", audio: "Audio 100")
creation_conversation_50 = Conversation.create(lesson_id: 1, lesson_language_version: "Creation Conversation - 50% Thai", content: "50 - เกี่ยวกับพระผู้สร้างและอื่นๆ อีก", audio: "Audio 50")
creation_conversation_0 = Conversation.create(lesson_id: 1, lesson_language_version: "Creation Conversation - 0% Thai", content: "0 - เกี่ยวกับพระผู้สร้างและอื่นๆ อีก", audio: "Audio 0")

sin_conversation_100 = Conversation.create(lesson_id: 2, lesson_language_version: "Sin Conversation - 100% Thai", content: "100 - เกี่ยวกับบาปเข้าเอเดนและอื่นๆ อีก", audio: "Audio 100")
sin_conversation_50 = Conversation.create(lesson_id: 2, lesson_language_version: "Sin Conversation - 50% Thai", content: "50 - เกี่ยวกับบาปเข้าเอเดนและอื่นๆ อีก", audio: "Audio 50")
sin_conversation_0 = Conversation.create(lesson_id: 2, lesson_language_version: "Sin Conversation - 0% Thai", content: "20 - เกี่ยวกับบาปเข้าเอเดนและอื่นๆ อีก", audio: "Audio 0")

abraham_conversation_100 = Conversation.create(lesson_id: 3, lesson_language_version: "Abraham Conversation - 100% Thai", content: "100 - ชายชราผู้ศรัทธาต่อพระเจ้าและอื่นๆ อีก", audio: "Audio 100")
abraham_conversation_50 = Conversation.create(lesson_id: 3, lesson_language_version: "Abraham Conversation - 50% Thai", content: "50 - ชายชราผู้ศรัทธาต่อพระเจ้าและอื่นๆ อีก", audio: "Audio 100")
abraham_conversation_0 = Conversation.create(lesson_id: 3, lesson_language_version: "Abraham Conversation - 0% Thai", content: "0 - ชายชราผู้ศรัทธาต่อพระเจ้าและอื่นๆ อีก", audio: "Audio 100")

david_conversation_100 = Conversation.create(lesson_id: 4, lesson_language_version: "David Conversation - 100% Thai", content: "100 - เกี่ยวกับกษัตริย์เดวิดและอื่นๆ อีก", audio: "Audio 100")
david_conversation_50 = Conversation.create(lesson_id: 4, lesson_language_version: "David Conversation - 50% Thai", content: "50 - เกี่ยวกับกษัตริย์เดวิดและอื่นๆ อีก", audio: "Audio 50")
david_conversation_0 = Conversation.create(lesson_id: 4, lesson_language_version: "David Conversation - 0% Thai", content: "0 - เกี่ยวกับกษัตริย์เดวิดและอื่นๆ อีก", audio: "Audio 0")

bathsheeba_conversation_100 = Conversation.create(lesson_id: 5, lesson_language_version: "Bathsheeba Conversation - 100% Thai", content: "100 - เกี่ยวกับเดวิดกับบัทเชบาและอื่นๆ อีก", audio: "Audio 100")
bathsheeba_conversation_50 = Conversation.create(lesson_id: 5, lesson_language_version: "Bathsheeba Conversation - 50% Thai", content: "50 - เกี่ยวกับเดวิดกับบัทเชบาและอื่นๆ อีก", audio: "Audio 50")
bathsheeba_conversation_0 = Conversation.create(lesson_id: 5, lesson_language_version: "Bathsheeba Conversation - 0% Thai", content: "0 - เกี่ยวกับเดวิดกับบัทเชบาและอื่นๆ อีก", audio: "Audio 0")

creation_practice_vocabulary = Practice.create(lesson_id: 1, type_of: "Vocabulary Practice: เกี่ยวกับพระผู้สร้าง", content: "Vocabulary Content: เกี่ยวกับพระผู้สร้าง", audio: "Audio Practice Vocabulary")
creation_practice_phrases = Practice.create(lesson_id: 1, type_of: "Phrases Practice: เกี่ยวกับพระผู้สร้าง", content: "Phrases Content: เกี่ยวกับพระผู้สร้าง", audio: "Audio Practice Phrases")
creation_practice_sentences = Practice.create(lesson_id: 1, type_of: "Sentences Practice: เกี่ยวกับพระผู้สร้าง", content: "Sentences Content: เกี่ยวกับพระผู้สร้าง", audio: "Audio Practice Sentences")

sin_practice_vocabulary = Practice.create(lesson_id: 2, type_of: "Vocabulary Practice: เกี่ยวกับบาปเข้าเอเดน", content: "Vocabulary Content: เกี่ยวกับบาปเข้าเอเดน", audio: "Audio Practice Vocabulary")
sin_practice_phrases = Practice.create(lesson_id: 2, type_of: "Phrases Practice: เกี่ยวกับบาปเข้าเอเดน", content: "Phrases Content: เกี่ยวกับบาปเข้าเอเดน", audio: "Audio Practice Phrases")
sin_practice_sentences = Practice.create(lesson_id: 2, type_of: "Sentences Practice: เกี่ยวกับบาปเข้าเอเดน", content: "Sentences Content: เกี่ยวกับบาปเข้าเอเดน", audio: "Audio Practice Sentences")

abraham_practice_vocabulary = Practice.create(lesson_id: 3, type_of: "Vocabulary Practice: เกี่ยวกับชายชราผู้ศรัทธาต่อพระเจ้า", content: "Vocabulary Content: เกี่ยวกับชายชราผู้ศรัทธาต่อพระเจ้า", audio: "Audio Practice Vocabulary")
abraham_practice_phrases = Practice.create(lesson_id: 3, type_of: "Phrases Practice: เกี่ยวกับชายชราผู้ศรัทธาต่อพระเจ้า", content: "Phrases Content: เกี่ยวกับชายชราผู้ศรัทธาต่อพระเจ้า", audio: "Audio Practice Phrases")
abraham_practice_sentences = Practice.create(lesson_id: 3, type_of: "Sentences Practice: เกี่ยวกับชายชราผู้ศรัทธาต่อพระเจ้า", content: "Sentences Content: เกี่ยวกับชายชราผู้ศรัทธาต่อพระเจ้า", audio: "Audio Practice Sentences")

david_practice_vocabulary = Practice.create(lesson_id: 4, type_of: "Vocabulary Practice: เกี่ยวกับกษัตริย์เดวิด", content: "Vocabulary Content: เกี่ยวกับกษัตริย์เดวิด", audio: "Audio Practice Vocabulary")
david_practice_phrases = Practice.create(lesson_id: 4, type_of: "Phrases Practice: เกี่ยวกับกษัตริย์เดวิด", content: "Phrases Content: เกี่ยวกับกษัตริย์เดวิด", audio: "Audio Practice Phrases")
david_practice_sentences = Practice.create(lesson_id: 4, type_of: "Sentences Practice: เกี่ยวกับกษัตริย์เดวิด", content: "Sentences Content: เกี่ยวกับกษัตริย์เดวิด", audio: "Audio Practice Sentences")

bathsheeba_practice_vocabulary = Practice.create(lesson_id: 5, type_of: "Vocabulary Practice: เกี่ยวกับเดวิดกับบัทเชบา", content: "Vocabulary Content: เกี่ยวกับเดวิดกับบัทเชบา", audio: "Audio Practice Vocabulary")
bathsheeba_practice_phrases = Practice.create(lesson_id: 5, type_of: "Phrases Practice: เกี่ยวกับเดวิดกับบัทเชบา", content: "Phrases Content: เกี่ยวกับเดวิดกับบัทเชบา", audio: "Audio Practice Phrases")
bathsheeba_practice_sentences = Practice.create(lesson_id: 5, type_of: "Sentences Practice: เกี่ยวกับเดวิดกับบัทเชบา", content: "Sentences Content: เกี่ยวกับเดวิดกับบัทเชบา", audio: "Audio Practice Sentences")

quiz = Assessment.create(course_id: 1, part_id: 1, lesson_id: 1, type_of: "Quiz")

question1 = Question.create(assessment_id: 1, question_content: "Question #1 for you?")
question2 = Question.create(assessment_id: 1, question_content: "Question #2 for you?")
question3 = Question.create(assessment_id: 1, question_content: "Question #3 for you?")

answer1_1 = Answer.create(question_id: 1, answer_content: "Answer to question #1 -- WRONG!!", choice: 'Wrong')
answer1_2 = Answer.create(question_id: 1, answer_content: "Answer to question #1 -- WRONG!!", choice: 'Wrong')
answer1_3 = Answer.create(question_id: 1, answer_content: "Answer to question #1 -- CORRECT!!", choice: 'Correct')
answer1_4 = Answer.create(question_id: 1, answer_content: "Answer to question #1 -- WRONG!!", choice: 'Wrong')

answer2_1 = Answer.create(question_id: 2, answer_content: "Answer to question #2 -- CORRECT!!", choice: 'Correct')
answer2_2 = Answer.create(question_id: 2, answer_content: "Answer to question #2 -- WRONG!!", choice: 'Wrong')
answer2_3 = Answer.create(question_id: 2, answer_content: "Answer to question #2 -- WRONG!!", choice: 'Wrong')
answer2_4 = Answer.create(question_id: 2, answer_content: "Answer to question #2 -- WRONG!!", choice: 'Wrong')

answer3_1 = Answer.create(question_id: 3, answer_content: "Answer to question #3 -- WRONG!!", choice: 'Wrong')
answer3_2 = Answer.create(question_id: 3, answer_content: "Answer to question #3 -- CORRECT!!", choice: 'Correct')
answer3_3 = Answer.create(question_id: 3, answer_content: "Answer to question #3 -- WRONG!!", choice: 'Wrong')
answer3_4 = Answer.create(question_id: 3, answer_content: "Answer to question #3 -- WRONG!!", choice: 'Wrong')

admin = Role.create(overseer_id: 1, name: 'Admin')











