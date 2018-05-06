class CreateDailyOccupancies < ActiveRecord::Migration[5.1]
  def change
    create_table :daily_occupancies do |t|
      t.belongs_to :hotel
      t.integer :rooms_occupied
      t.integer :arrivals
      t.integer :departures
      t.date :date
      t.timestamps
    end
  end
end
