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

creation_story_100 = Story.create(lesson_id: 1, lesson_language_version: "Creation - 100% Thai", content: "100 - เกี่ยวกับพระผู้สร้างและอื่นๆ อีก", audio: "Audio 100")
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

creation_practice = Practice.create(lesson_id: 1, name: "Practice: เกี่ยวกับพระผู้สร้าง")
sin_practice = Practice.create(lesson_id: 2, name: "Practice: เกี่ยวกับบาปเข้าเอเดน")
abraham_practice = Practice.create(lesson_id: 3, name: "Practice: เกี่ยวกับชายชราผู้ศรัทธาต่อพระเจ้า..about an old man")
david_practice = Practice.create(lesson_id: 4, name: "Practice: เกี่ยวกับกษัตริย์เดวิด")
bathsheeba_practice = Practice.create(lesson_id: 5, name: "Practice: เกี่ยวกับเดวิดกับบัทเชบา")

creation_practice_vocabulary = PracticeVocabulary.create(practice_id: 1, content: "Vocabulary Content: เกี่ยวกับพระผู้สร้าง", audio: "Audio Practice Vocab")
creation_practice_phrase = PracticePhrase.create(practice_id: 1, content: "Phrase Content: เกี่ยวกับพระผู้สร้าง", audio: "Audio Practice Phrases")
creation_practice_sentence = PracticeSentence.create(practice_id: 1, content: "Sentence Content: เกี่ยวกับพระผู้สร้าง", audio: "Audio Practice Sentences")

sin_practice_vocabulary = PracticeVocabulary.create(practice_id: 2, content: "Vocabulary Content: เกี่ยวกับบาปเข้าเอเดน", audio: "Audio Practice Vocab")
sin_practice_phrase = PracticePhrase.create(practice_id: 2, content: "Phrase Content: เกี่ยวกับบาปเข้าเอเดน", audio: "Audio Practice Phrases")
sin_practice_sentence = PracticeSentence.create(practice_id: 2, content: "Sentence Content: เกี่ยวกับบาปเข้าเอเดน", audio: "Audio Practice Sentences")

abraham_practice_vocabulary = PracticeVocabulary.create(practice_id: 3, content: "Vocabulary Content: เกี่ยวกับชายชราผู้ศรัทธาต่อพระเจ้า", audio: "Audio Practice Vocab")
abraham_practice_phrase = PracticePhrase.create(practice_id: 3, content: "Phrase Content: เกี่ยวกับชายชราผู้ศรัทธาต่อพระเจ้า", audio: "Audio Practice Phrases")
abraham_practice_sentence = PracticeSentence.create(practice_id: 3, content: "Sentence Content: เกี่ยวกับชายชราผู้ศรัทธาต่อพระเจ้า", audio: "Audio Practice Sentences")

david_practice_vocabulary = PracticeVocabulary.create(practice_id: 4, content: "Vocabulary Content: เกี่ยวกับกษัตริย์เดวิด", audio: "Audio Practice Vocab")
david_practice_phrase = PracticePhrase.create(practice_id: 4, content: "Phrase Content: เกี่ยวกับกษัตริย์เดวิด", audio: "Audio Practice Phrases")
david_practice_sentence = PracticeSentence.create(practice_id: 4, content: "Sentence Content: เกี่ยวกับกษัตริย์เดวิด", audio: "Audio Practice Sentences")

bathsheeba_practice_vocabulary = PracticeVocabulary.create(practice_id: 5, content: "Vocabulary Content: เกี่ยวกับเดวิดกับบัทเชบา", audio: "Audio Practice Vocab")
bathsheeba_practice_phrase = PracticePhrase.create(practice_id: 5, content: "Phrase Content: เกี่ยวกับเดวิดกับบัทเชบา", audio: "Audio Practice Phrases")
bathsheeba_practice_sentence = PracticeSentence.create(practice_id: 5, content: "Sentence Content: เกี่ยวกับเดวิดกับบัทเชบา", audio: "Audio Practice Sentences")

nathan_practice = Practice.create(lesson_id: 6, name: "Practice: เกี่ยวกับเรื่อง ของนาธาน")
birth_practice = Practice.create(lesson_id: 7, name: "Practice: เกี่ยวกับการให้กำเนิดพระเยซู")
baptism_practice = Practice.create(lesson_id: 8, name: "Practice: เกี่ยวกับพระเยซูรับบัพติศมา")
exorcism_practice = Practice.create(lesson_id: 9, name: "Practice: เกี่ยวกับพระเยซูรักษาคนถูกผีสิ")
blind_practice = Practice.create(lesson_id: 10, name: "Practice: เกี่ยวกับพระเยซูรักษาคนตาบอด")

nathan_practice_vocabulary = PracticeVocabulary.create(practice_id: 6, content: "Vocabulary Content: เกี่ยวกับเรื่อง ของนาธาน", audio: "Audio Practice Vocab")
nathan_practice_phrase = PracticePhrase.create(practice_id: 6, content: "Phrase Content: เกี่ยวกับเรื่อง ของนาธาน", audio: "Audio Practice Phrases")
nathan_practice_sentence = PracticeSentence.create(practice_id: 6, content: "Sentence Content: เกี่ยวกับเรื่อง ของนาธาน", audio: "Audio Practice Sentences")

birth_practice_vocabulary = PracticeVocabulary.create(practice_id: 7, content: "Vocabulary Content: เกี่ยวกับการให้กำเนิดพระเยซู", audio: "Audio Practice Vocab")
birth_practice_phrase = PracticePhrase.create(practice_id: 7, content: "Phrase Content: เกี่ยวกับการให้กำเนิดพระเยซู", audio: "Audio Practice Phrases")
birth_practice_sentence = PracticeSentence.create(practice_id: 7, content: "Sentence Content: เกี่ยวกับการให้กำเนิดพระเยซู", audio: "Audio Practice Sentences")

baptism_practice_vocabulary = PracticeVocabulary.create(practice_id: 8, content: "Vocabulary Content: เกี่ยวกับพระเยซูรับบัพติศมา", audio: "Audio Practice Vocab")
baptism_practice_phrase = PracticePhrase.create(practice_id: 8, content: "Phrase Content: เกี่ยวกับพระเยซูรับบัพติศมา", audio: "Audio Practice Phrases")
baptism_practice_sentence = PracticeSentence.create(practice_id: 8, content: "Sentence Content: เกี่ยวกับพระเยซูรับบัพติศมา", audio: "Audio Practice Sentences")

exorcism_practice_vocabulary = PracticeVocabulary.create(practice_id: 9, content: "Vocabulary Content: เกี่ยวกับพระเยซูรักษาคนถูกผีสิ", audio: "Audio Practice Vocab")
exorcism_practice_phrase = PracticePhrase.create(practice_id: 9, content: "Phrase Content: เกี่ยวกับพระเยซูรักษาคนถูกผีสิ", audio: "Audio Practice Phrases")
exorcism_practice_sentence = PracticeSentence.create(practice_id: 9, content: "Sentence Content: เกี่ยวกับพระเยซูรักษาคนถูกผีสิ", audio: "Audio Practice Sentences")

blind_practice_vocabulary = PracticeVocabulary.create(practice_id: 10, content: "Vocabulary Content: เกี่ยวกับพระเยซูรักษาคนตาบอด", audio: "Audio Practice Vocab")
blind_practice_phrase = PracticePhrase.create(practice_id: 10, content: "Phrase Content: เกี่ยวกับพระเยซูรักษาคนตาบอด", audio: "Audio Practice Phrases")
blind_practice_sentence = PracticeSentence.create(practice_id: 10, content: "Sentence Content: เกี่ยวกับพระเยซูรักษาคนตาบอด", audio: "Audio Practice Sentences")











