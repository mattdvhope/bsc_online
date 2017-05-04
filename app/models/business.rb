class Business < ApplicationRecord

  validates_presence_of :business_name, length: { minimum: 2 }
  validates_presence_of :phone

  validates_numericality_of :employees_no, only_integer: true

end
