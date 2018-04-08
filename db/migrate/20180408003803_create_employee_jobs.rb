class CreateEmployeeJobs < ActiveRecord::Migration[5.1]
  def change
    create_table :employee_jobs do |t|
      t.belongs_to :employee, foreign_key: true
      t.belongs_to :job, foreign_key: true
      t.string :pay_type
      t.float :pay_rate

      t.timestamps
    end
  end
end
