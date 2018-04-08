class Right < ApplicationRecord
  has_many :roles_rights, dependent: :destroy 
  has_many :roles, through: :roles_rights
end
