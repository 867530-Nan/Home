class CreateSubdepartments < ActiveRecord::Migration[5.1]
  def change
    create_table :subdepartments do |t|
      t.string :name, null: false
      t.belongs_to :department, foreign_key: true, null: false

      t.timestamps
    end
  end
end
