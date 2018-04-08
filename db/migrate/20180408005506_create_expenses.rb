class CreateExpenses < ActiveRecord::Migration[5.1]
  def change
    create_table :expenses do |t|
      t.string :name
      t.belongs_to :expense_category, foreign_key: true
      t.float :amount
      t.date :date

      t.timestamps
    end
  end
end
