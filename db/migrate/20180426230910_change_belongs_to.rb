class ChangeBelongsTo < ActiveRecord::Migration[5.1]
  def change
    remove_column :jobs, :subdepartment_id
    remove_column :budgets, :subdepartment_id 

    add_reference :jobs, :department, index: true, foreign_key: true 
    add_reference :budgets, :department, index: true, foreign_key: true 
  end
end
