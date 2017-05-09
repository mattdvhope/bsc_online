class Business < ApplicationRecord

  validates_presence_of :business_name, length: { minimum: 2 }
  validates_presence_of :leader_name

  validates_presence_of :phone
  VALID_PHONE_REGEX = /\d/
  validates_format_of :phone, :with => VALID_PHONE_REGEX, :on => :create

  validates_presence_of :email, length: { maximum: 40 }
  VALID_EMAIL_REGEX = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\Z/i
  validates_format_of :email, :with => VALID_EMAIL_REGEX, :on => :create
  validates_uniqueness_of :email

end
