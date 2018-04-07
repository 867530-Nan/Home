class CreateHotels < ActiveRecord::Migration[5.1]
  def change
    create_table :hotels do |t|
      t.string :name
      t.string :phone_number
      t.integer :number_of_rooms
      t.string :manager_name

      t.timestamps
    end
  end
end
