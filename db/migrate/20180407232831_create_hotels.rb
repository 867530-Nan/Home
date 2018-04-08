class CreateHotels < ActiveRecord::Migration[5.1]
  def change
    create_table :hotels do |t|
      t.string :name, null: false
      t.string :phone_number, null: false 
      t.integer :number_of_rooms
      t.string :manager_name, null: false

      t.timestamps
    end
  end
end
