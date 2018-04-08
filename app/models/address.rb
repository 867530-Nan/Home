class Address < ApplicationRecord
  belongs_to :addressable, polymorphic: true

  validates :street, presence: { message: "Please enter the street address." }
  validates :city, presence: { message: "Please enter the city."}
  validates :state, presence: { message: "Please enter the state."}
  validates :zip, presence: { message: "Please enter the postal code."}
  validates :country, presence: { message: "Please enter the country."}


end
