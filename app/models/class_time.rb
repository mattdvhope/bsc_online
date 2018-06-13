class ClassTime < ActiveRecord::Base

  has_many :cep_participations
  has_many :users, through: :cep_participations

end
