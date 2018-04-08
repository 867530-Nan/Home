class Right < ApplicationRecord
  has_many :roles_rights, dependent: :destroy 
  has_many :roles, through: :roles_rights

  validates :name, presence: { message: "Please enter the name of the right." }

end
