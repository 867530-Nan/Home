class CreateAddresses < ActiveRecord::Migration[5.1]
  def change
    create_table :addresses do |t|
      t.string :street
      t.string :street_two
      t.string :city
      t.string :state
      t.string :zip
      t.string :country
      t.references :addressable, polymorphic: true

      t.timestamps
    end
  end
end
