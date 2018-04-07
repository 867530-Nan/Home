class Hotel < ApplicationRecord
  has_one :address, as: :addressable
end
