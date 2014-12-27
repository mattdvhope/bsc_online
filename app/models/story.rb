class Story < ActiveRecord::Base

  belongs_to :lesson
  has_many :text_hundred_thais
  has_many :text_english_seventy_thais
  has_many :text_english_fifty_thais
  has_many :text_english_twenty_thais
  has_many :text_english_zero_thais

end
