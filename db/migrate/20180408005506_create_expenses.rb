class CreateExpenses < ActiveRecord::Migration[5.1]
  def change
    create_table :expenses do |t|
      t.string :name, null: false
      t.belongs_to :expense_category, foreign_key: true, null: false
      t.float :amount, null: false
      t.date :date, null: false

      t.timestamps
    end
  end
end
