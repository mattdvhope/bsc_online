class Question < ActiveRecord::Base

  belongs_to :assessment
  has_many :answers, :dependent => :destroy

  accepts_nested_attributes_for :answers, reject_if: lambda { |a| a[:answer_content].blank? }, allow_destroy: true

end
