class User < ActiveRecord::Base

  include CoderProvidable

  before_save { self.email = email.downcase unless self.email.blank? }

  has_many :plans, :foreign_key=>"student_id", :dependent => :destroy
  has_many :curriculums, through: :plans
  has_many :choices, :foreign_key=>"student_id", :dependent => :destroy
  has_many :grades, :foreign_key=>"student_id", :dependent => :destroy
  has_one :admin_application, :dependent => :destroy

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
  validates_presence_of :first_name, length: { maximum: 30 }
  validates_presence_of :last_name, length: { maximum: 30 }
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates_presence_of :gender, length: { maximum: 30 }
  validates_presence_of :phone_number, length: { maximum: 30 }
  validates :email, presence: true, length: { maximum: 50 },
                    format: { with: VALID_EMAIL_REGEX },
                    uniqueness: { case_sensitive: false }, :unless => :guest?
  validates_presence_of :district, length: { maximum: 30 }, :unless => :guest?

  # has_secure_password validations: false

  validates_presence_of :password, :unless => :guest?
  validates :password, length: { minimum: 6 }, :unless => :guest?
  validates :password, confirmation: true, :unless => :guest?
  validates_presence_of :password_confirmation, :unless => :guest?
  VALID_POSTAL_CODE_REGEX = /\A(10|11|12|13|14|15|16|17|18|20|21|22|23|24|25|26|27|30|31|32|33|34|35|36|37|38|39|40|41|42|43|44|45|46|47|48|49|50|51|52|53|54|55|56|57|58|60|61|62|63|64|65|66|67|70|71|72|73|74|75|76|77|80|81|82|83|84|85|86|90|91|92|93|94|95|96)(\d{3})\z/

  validates :postal_code, presence: true,
            format: { with:  VALID_POSTAL_CODE_REGEX }, :unless => :guest?

  def self.new_guest
    new { |u| u.guest = true } # Doing this in a block to protect the guest attribute from mass assignment.
  end

  def name
    guest ? "Admin Applicant" : first_name
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

  # def guest_session_time_limit_expired?
  #   Time.now > self.created_at + 1.hour
  # end

end
