class CreateBudgets < ActiveRecord::Migration[5.1]
  def change
    create_table :budgets do |t|
      t.belongs_to :subdepartment, foreign_key: true
      t.float :amount
      t.date :date

      t.timestamps
    end
  end
end
