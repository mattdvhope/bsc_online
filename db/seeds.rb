# Examples:
  # Mayor.create(name: 'Emanuel', city: cities.first)
  # cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])

bsc_core_thai = Curriculum.create(name: 'BSC Core Curriculum for Thais', description: 'This curriculum consists of 10 levels of English for daily life.  It is specifically designed for Thai students.')
bsc_special_thai = Curriculum.create(name: 'BSC Special Course Curriculum for Thais', description: 'This curriculum consists of various English for Specific Purpose courses.  It is specifically designed for Thai students.')

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

alex    = User.create(first_name: 'Alex', last_name: 'Blanton', email: 'alex@test.tv', password: 'password', password_confirmation: 'password', postal_code: 10501)
matt    = User.create(first_name: 'Matt', last_name: 'Malone', email: 'matt@test.tv', password: 'password', password_confirmation: 'password', postal_code: 10401)
tim     = User.create(first_name: 'Tim', last_name: 'Owens', email: 'tim@test.tv', password: 'password', password_confirmation: 'password', postal_code: 10301)
john    = User.create(first_name: 'John', last_name: 'Lapos', email: 'john@test.tv', password: 'password', password_confirmation: 'password', postal_code: 10201)

core_for_matt = Plan.create(curriculum_id: 1, student_id: 2, description: "Matt, this plan for you consists of the following courses for which you have registered for from curriculum1.")
special_for_alex = Plan.create(curriculum_id: 2, student_id: 1, description: "Alex, this plan for you consists of the following courses for which you have registered for from curriculum2.")
special_for_matt = Plan.create(curriculum_id: 2, student_id: 2, description: "Matt, this plan for you consists of the following courses for which you have registered for from curriculum2.")
core_for_tim = Plan.create(curriculum_id: 1, student_id: 3, description: "Tim, this plan for you consists of the following courses for which you have registered for from curriculum1.")
special_for_john = Plan.create(curriculum_id: 2, student_id: 4, description: "John, this plan for you consists of the following courses for which you have registered for from curriculum2.")

part_1 = Part.create(course_id: 1)
part_2 = Part.create(course_id: 1)
part_3 = Part.create(course_id: 1)
part_4 = Part.create(course_id: 1)

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

creation_story = Story.create(lesson_id: 1, name: "เกี่ยวกับพระผู้สร้าง")
sin_story = Story.create(lesson_id: 2, name: "เกี่ยวกับบาปเข้าเอเดน")
abraham_story = Story.create(lesson_id: 3, name: "เกี่ยวกับชายชราผู้ศรัทธาต่อพระเจ้า..about an old man")
david_story = Story.create(lesson_id: 4, name: "เกี่ยวกับกษัตริย์เดวิด")
bathsheeba_story = Story.create(lesson_id: 5, name: "เกี่ยวกับเดวิดกับบัทเชบา")

creation_100  = TextHundredThai.create(story_id: 1, content: "เกี่ยวกับพระผู้สร้างและอื่นๆ อีก", audio: "Audio 100")
creation_70   = TextEnglishSeventyThai.create(story_id: 1, content: "เกี่ยวกับพระผู้สร้าง-English70", audio: "Audio 70")
creation_50   = TextEnglishFiftyThai.create(story_id: 1, content: "เกี่ยวกับพระผู้สร้าง-English50", audio: "Audio 50")
creation_20   = TextEnglishTwentyThai.create(story_id: 1, content: "เกี่ยวกับพระผู้สร้าง-English20", audio: "Audio 20")
creation_0    = TextEnglishZeroThai.create(story_id: 1, content: "เกี่ยวกับพระผู้สร้าง-English0", audio: "Audio 0")

sin_100       = TextHundredThai.create(story_id: 2, content: "เกี่ยวกับบาปเข้าเอเดนและอื่นๆ อีก", audio: "Audio 100")
sin_70        = TextEnglishSeventyThai.create(story_id: 2, content: "เกี่ยวกับบาปเข้าเอเดน-English70", audio: "Audio 70")
sin_50        = TextEnglishFiftyThai.create(story_id: 2, content: "เกี่ยวกับบาปเข้าเอเดน-English50", audio: "Audio 50")
sin_20        = TextEnglishTwentyThai.create(story_id: 2, content: "เกี่ยวกับบาปเข้าเอเดน-English20", audio: "Audio 20")
sin_0         = TextEnglishZeroThai.create(story_id: 2, content: "เกี่ยวกับบาปเข้าเอเดน-English0", audio: "Audio 0")

abraham_100   = TextHundredThai.create(story_id: 3, content: "ชายชราผู้ศรัทธาต่อพระเจ้าและอื่นๆ อีก", audio: "Audio 100")
abraham_70    = TextEnglishSeventyThai.create(story_id: 3, content: "ชายชราผู้ศรัทธาต่อพระเจ้า-English70", audio: "Audio 70")
abraham_50    = TextEnglishFiftyThai.create(story_id: 3, content: "ชายชราผู้ศรัทธาต่อพระเจ้า-English50", audio: "Audio 50")
abraham_20    = TextEnglishTwentyThai.create(story_id: 3, content: "ชายชราผู้ศรัทธาต่อพระเจ้า-English20", audio: "Audio 20")
abraham_0     = TextEnglishZeroThai.create(story_id: 3, content: "ชายชราผู้ศรัทธาต่อพระเจ้า-English0", audio: "Audio 0")

david_100     = TextHundredThai.create(story_id: 4, content: "เกี่ยวกับกษัตริย์เดวิดและอื่นๆ อีก", audio: "Audio 100")
david_70      = TextEnglishSeventyThai.create(story_id: 4, content: "เกี่ยวกับกษัตริย์เดวิด-English70", audio: "Audio 70")
david_50      = TextEnglishFiftyThai.create(story_id: 4, content: "เกี่ยวกับกษัตริย์เดวิด-English50", audio: "Audio 50")
david_20      = TextEnglishTwentyThai.create(story_id: 4, content: "เกี่ยวกับกษัตริย์เดวิด-English20", audio: "Audio 20")
david_0       = TextEnglishZeroThai.create(story_id: 4, content: "เกี่ยวกับกษัตริย์เดวิด-English0", audio: "Audio 0")

bathsheeba_100 = TextHundredThai.create(story_id: 5, content: "เกี่ยวกับเดวิดกับบัทเชบาและอื่นๆ อีก", audio: "Audio 100")
bathsheeba_70  = TextEnglishSeventyThai.create(story_id: 5, content: "เกี่ยวกับเดวิดกับบัทเชบา-English70", audio: "Audio 70")
bathsheeba_50  = TextEnglishFiftyThai.create(story_id: 5, content: "เกี่ยวกับเดวิดกับบัทเชบา-English50", audio: "Audio 50")
bathsheeba_20  = TextEnglishTwentyThai.create(story_id: 5, content: "เกี่ยวกับเดวิดกับบัทเชบา-English20", audio: "Audio 20")
bathsheeba_0   = TextEnglishZeroThai.create(story_id: 5, content: "เกี่ยวกับเดวิดกับบัทเชบา-English0", audio: "Audio 0")

creation_conversation = Conversation.create(lesson_id: 1, name: "Conversation: เกี่ยวกับพระผู้สร้าง")
sin_conversation = Conversation.create(lesson_id: 2, name: "Conversation: เกี่ยวกับบาปเข้าเอเดน")
abraham_conversation = Conversation.create(lesson_id: 3, name: "Conversation: เกี่ยวกับชายชราผู้ศรัทธาต่อพระเจ้า..about an old man")
david_conversation = Conversation.create(lesson_id: 4, name: "Conversation: เกี่ยวกับกษัตริย์เดวิด")
bathsheeba_conversation = Conversation.create(lesson_id: 5, name: "Conversation: เกี่ยวกับเดวิดกับบัทเชบา")

creation_conv_100  = ConversationHundredThai.create(conversation_id: 1, content: "เกี่ยวกับพระผู้สร้างและอื่นๆ อีก", audio: "Audio 100")
creation_conv_50   = ConversationEnglishFiftyThai.create(conversation_id: 1, content: "เกี่ยวกับพระผู้สร้าง-English50", audio: "Audio 50")
creation_conv_0    = ConversationEnglishZeroThai.create(conversation_id: 1, content: "เกี่ยวกับพระผู้สร้าง-English0", audio: "Audio 0")

sin_conv_100       = ConversationHundredThai.create(conversation_id: 2, content: "เกี่ยวกับบาปเข้าเอเดนและอื่นๆ อีก", audio: "Audio 100")
sin_conv_50        = ConversationEnglishFiftyThai.create(conversation_id: 2, content: "เกี่ยวกับบาปเข้าเอเดน-English50", audio: "Audio 50")
sin_conv_0         = ConversationEnglishZeroThai.create(conversation_id: 2, content: "เกี่ยวกับบาปเข้าเอเดน-English0", audio: "Audio 0")

abraham_conv_100   = ConversationHundredThai.create(conversation_id: 3, content: "ชายชราผู้ศรัทธาต่อพระเจ้าและอื่นๆ อีก", audio: "Audio 100")
abraham_conv_50    = ConversationEnglishFiftyThai.create(conversation_id: 3, content: "ชายชราผู้ศรัทธาต่อพระเจ้า-English50", audio: "Audio 50")
abraham_conv_0     = ConversationEnglishZeroThai.create(conversation_id: 3, content: "ชายชราผู้ศรัทธาต่อพระเจ้า-English0", audio: "Audio 0")

david_100          = ConversationHundredThai.create(conversation_id: 4, content: "เกี่ยวกับกษัตริย์เดวิดและอื่นๆ อีก", audio: "Audio 100")
david_50           = ConversationEnglishFiftyThai.create(conversation_id: 4, content: "เกี่ยวกับกษัตริย์เดวิด-English50", audio: "Audio 50")
david_0            = ConversationEnglishZeroThai.create(conversation_id: 4, content: "เกี่ยวกับกษัตริย์เดวิด-English0", audio: "Audio 0")

bathsheeba_100     = ConversationHundredThai.create(conversation_id: 5, content: "เกี่ยวกับเดวิดกับบัทเชบาและอื่นๆ อีก", audio: "Audio 100")
bathsheeba_50      = ConversationEnglishFiftyThai.create(conversation_id: 5, content: "เกี่ยวกับเดวิดกับบัทเชบา-English50", audio: "Audio 50")
bathsheeba_0       = ConversationEnglishZeroThai.create(conversation_id: 5, content: "เกี่ยวกับเดวิดกับบัทเชบา-English0", audio: "Audio 0")




creation_practice = Practice.create(lesson_id: 1, sentences: "Practice: เกี่ยวกับพระผู้สร้าง", audio_sentences: "Practice audio file", phrases: "Practice: เกี่ยวกับพระ..who created", audio_phrases: "Practice audio file", vocabulary: "Practice: About the God who created", audio_vocab: "Practice audio file")
sin_practice = Practice.create(lesson_id: 2, sentences: "Practice: เกี่ยวกับบาปเข้าเอเดน", audio_sentences: "Practice audio file", phrases: "Practice: เกี่ยวกับ..sin entered Eden", audio_phrases: "Practice audio file", vocabulary: "Practice: About how sin entered Eden", audio_vocab: "Practice audio file")
abraham_practice = Practice.create(lesson_id: 3, sentences: "Practice: เกี่ยวกับชายชราผู้ศรัทธาต่อพระเจ้า..about an old man", audio_sentences: "Practice audio file", phrases: "Practice: เกี่ยวกับชายชราผู้..about an old man", audio_phrases: "Practice audio file", vocabulary: "Practice: About an old man.", audio_vocab: "Practice audio file")
david_practice = Practice.create(lesson_id: 4, sentences: "Practice: เกี่ยวกับกษัตริย์เดวิด", audio_sentences: "Practice audio file", phrases: "Practice: เกี่ยวกับ..about King David", audio_phrases: "Practice audio file", vocabulary: "Practice: About King David", audio_vocab: "Practice audio file")
bathsheeba_practice = Practice.create(lesson_id: 5, sentences: "Practice: เกี่ยวกับเดวิดกับบัทเชบา", audio_sentences: "Practice audio file", phrases: "Practice: เกี่ยวกับเดวิด..about David and Bathsheeba", audio_phrases: "Practice audio file", vocabulary: "Practice: About David and Bathsheeba", audio_vocab: "Practice audio file")









