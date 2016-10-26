class User < ActiveRecord::Base

  include CoderProvidable # to generate pins

  before_save { self.email = email.downcase unless self.email.blank? }

  belongs_to :class_time

  has_many :plans, :foreign_key=>"student_id", :dependent => :destroy
  has_many :curriculums, through: :plans
  has_many :choices, :foreign_key=>"student_id", :dependent => :destroy
  has_many :grades, :foreign_key=>"student_id", :dependent => :destroy
  has_one :admin_application, :dependent => :destroy
  has_many :skype_time_slots, :dependent => :destroy

  def self.omniauth(auth)
    string_number = (auth.uid.to_i * rand(10000)).to_s
    where(uid_facebook: auth.uid).first_or_initialize.tap do |user|
      user.uid_facebook = auth.uid
      user.first_name = auth.info.first_name
      user.last_name = auth.info.last_name
      user.email = auth.info.email
      user.password = string_number
      user.password_confirmation = string_number
      user.gender = auth.extra.raw_info.gender == "male" ? "ผู้ชาย" : "ผู้หญิง"
      user.postal_code = "10901"
      user.save!
    end
  end

  def self.pins_available
    pins = ""
    holders = where("users.role = ? OR users.role = ?", "leader", "admin")
    holders.each do |holder|
      pins += holder.pin + "|"
    end

    pins = "\\A(" + pins[0...-1] + ")" + "\\z"
    valid_pins = /#{pins}/
    return valid_pins
  end

  # validates_presence_of :pin #, :unless => lambda { self.pin == "000000" }
  validates_presence_of :nickname, length: { maximum: 20 }, :if => :guest?
  validates_presence_of :first_name, length: { maximum: 30 }
  validates_presence_of :last_name, length: { maximum: 40 }
  validates_presence_of :gender
  validates_presence_of :age
  validates_presence_of :phone_number, length: { maximum: 30 }
  validates_presence_of :organization, :if => :non_student?

  validates_presence_of :email, length: { maximum: 40 }, :unless => :guest?
  VALID_EMAIL_REGEX = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\Z/i
  validates_format_of :email, :with => VALID_EMAIL_REGEX, :on => :create, :allow_blank => true
  validates_uniqueness_of :email, :allow_blank => true

  has_secure_password validations: false

  validates_presence_of :password, :unless => :guest?
  validates :password, length: { minimum: 6 }, :unless => :guest?
  validates :password, confirmation: true, :unless => :guest?
  validates_presence_of :password_confirmation, :unless => :guest?

  validate :class_period_choosen

  def class_period_choosen
    if self.class_period == "select_option"
      errors.add(:class_period, "must be selected")
    end
  end

  validates_presence_of :national_id, :if => :student?
  VALID_NATIONAL_ID_REGEX = /\A\d{13}\z/
  validates_format_of :national_id, :with => VALID_NATIONAL_ID_REGEX, :on => :create, :allow_blank => true
  validates_uniqueness_of :national_id, :allow_blank => true

  validates_presence_of :address_1, :if => :volunteer?
  validates_presence_of :city, :if => :volunteer?
  validates_presence_of :province, :if => :volunteer?
  VALID_POSTAL_CODE_REGEX = /\A\d{5}(-\d{4})?\z/
  validates :postal_code, presence: true,
            format: { with:  VALID_POSTAL_CODE_REGEX }, :if => :volunteer?
  validates_presence_of :country, :if => :volunteer?

  def self.new_guest
    new { |u| u.guest = true } # Doing this in a block to protect the guest attribute from mass assignment.
  end

  def name
    guest ? "Admin Applicant" : first_name
  end

  def non_student?
    if self.role
      if self.role == "leader" || self.role == "admin" || self.role == "volunteer"
        return true
      end
    end
    false
  end

  def leader?
    if self.role
      if self.role == "leader"
        return true
      end
    end
    false
  end

  def admin?
    if self.role
      if self.role == "admin"
        return true
      end
    end
    false
  end

  def volunteer?
    if self.role
      if self.role == "volunteer"
        return true
      end
    end
    false
  end

  def student?
    if self.role
      if self.role == "student"
        return true
      end
    end
    false
  end

  ##### to unsubscribe emails #####
  # Access token for a user
  def access_token
    User.create_access_token(self)
  end

  # Verifier based on our application secret
  def self.verifier
    ActiveSupport::MessageVerifier.new(Rails.application.secrets.secret_key_base)
  end

  # Get a user from a token
  def self.read_access_token(signature)
    id = verifier.verify(signature)
    User.find_by_id id
  rescue ActiveSupport::MessageVerifier::InvalidSignature
    nil
  end

  # Class method for token generation
  def self.create_access_token(user)
    verifier.generate(user.id)
  end
  ##### to unsubscribe emails #####






end
