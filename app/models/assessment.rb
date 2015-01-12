class Assessment < ActiveRecord::Base

  belongs_to :course
  belongs_to :part
  belongs_to :lesson
  has_many :questions, :dependent => :destroy

  accepts_nested_attributes_for :questions, reject_if: lambda { |a| a[:question_content].blank? }, allow_destroy: true

end
