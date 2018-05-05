class Invitation < ApplicationRecord
  has_secure_token
  belongs_to :employee
end
