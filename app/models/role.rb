class Role < ApplicationRecord
  has_many :roles_rights, dependent: :destroy
  has_many :rights, through: :roles_rights
  has_many :employee_roles

  validates :name, presence: { message: "Please enter the name of the role." }

end
