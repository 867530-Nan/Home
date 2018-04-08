class CreateJobs < ActiveRecord::Migration[5.1]
  def change
    create_table :jobs do |t|
      t.string :name
      t.belongs_to :subdepartment, foreign_key: true
      t.string :pay_type

      t.timestamps
    end
  end
end
