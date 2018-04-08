class CreateEmployeeJobs < ActiveRecord::Migration[5.1]
  def change
    create_table :employee_jobs do |t|
      t.belongs_to :employee, foreign_key: true, null: false
      t.belongs_to :job, foreign_key: true, null: false
      t.string :pay_type
      t.float :pay_rate, null: false

      t.timestamps
    end
  end
end
