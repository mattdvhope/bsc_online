class Conversation < ActiveRecord::Base

  belongs_to :lesson
  has_many :conversation_hundred_thais
  has_many :conversation_english_fifty_thais
  has_many :conversation_english_zero_thais

end
