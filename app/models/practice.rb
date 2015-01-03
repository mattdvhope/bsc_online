class Practice < ActiveRecord::Base

  belongs_to :lesson
  has_many :practice_vocabularies
  has_many :practice_phrases
  has_many :practice_sentences

end
