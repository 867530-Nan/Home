class CreateBudgets < ActiveRecord::Migration[5.1]
  def change
    create_table :budgets do |t|
      t.belongs_to :subdepartment, foreign_key: true, null: false 
      t.float :amount, null: false 
      t.date :date, null: false 

      t.timestamps
    end
  end
end
