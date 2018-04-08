class CreateJobs < ActiveRecord::Migration[5.1]
  def change
    create_table :jobs do |t|
      t.string :name, null: false
      t.belongs_to :subdepartment, foreign_key: true, null: false
      t.string :pay_type, null: false

      t.timestamps
    end
  end
end
