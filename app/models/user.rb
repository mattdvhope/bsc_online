class User < ActiveRecord::Base

  before_save { self.email = email.downcase }

  belongs_to :curriculum

  validates_presence_of :first_name, length: { maximum: 30 }
  validates_presence_of :last_name, length: { maximum: 30 }
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, presence: true, length: { maximum: 50 },
                    format: { with: VALID_EMAIL_REGEX },
                    uniqueness: { case_sensitive: false }
  has_secure_password validations: false
  validates_presence_of :password
  validates :password, length: { minimum: 6 }
  validates :password, confirmation: true
  validates_presence_of :password_confirmation
  VALID_POSTAL_CODE_REGEX = /\A(10|11|12|13|14|15|16|17|18|20|21|22|23|24|25|26|27|30|31|32|33|34|35|36|37|38|39|40|41|42|43|44|45|46|47|48|49|50|51|52|53|54|55|56|57|58|60|61|62|63|64|65|66|67|70|71|72|73|74|75|76|77|80|81|82|83|84|85|86|90|91|92|93|94|95|96)(\d{3})\z/
  validates :postal_code, presence: true, length: { is: 5 },
            format: { with:  VALID_POSTAL_CODE_REGEX }

end
