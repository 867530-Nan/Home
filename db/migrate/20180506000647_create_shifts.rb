class CreateShifts < ActiveRecord::Migration[5.1]
  def change
    create_table :shifts do |t|
      t.belongs_to :employee_job
      t.datetime :shift_start
      t.datetime :shift_end
      t.timestamps
    end
  end
end
