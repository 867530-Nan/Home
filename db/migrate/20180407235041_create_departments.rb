class CreateDepartments < ActiveRecord::Migration[5.1]
  def change
    create_table :departments do |t|
      t.string :name, null: false
      t.belongs_to :hotel, foreign_key: true, null: false

      t.timestamps
    end
  end
end
