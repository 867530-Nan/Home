class User < ActiveRecord::Base
  # Include default devise modules.
  devise  :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable,
          :omniauthable
  include DeviseTokenAuth::Concerns::User

  has_one :employee

  # after_create :hook_employee

  # def hook_employee
  #   return unless self.provider == "email"
  #   Employee.find_by(email_address: self.uid).update(user_id: self.id)
  # end 


end
