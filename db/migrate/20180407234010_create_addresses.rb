class CreateAddresses < ActiveRecord::Migration[5.1]
  def change
    create_table :addresses do |t|
      t.string :street, null: false
      t.string :street_two
      t.string :city, null: false
      t.string :state, null: false 
      t.string :zip, null: false 
      t.string :country
      t.references :addressable, polymorphic: true, null: false

      t.timestamps
    end
  end
end
