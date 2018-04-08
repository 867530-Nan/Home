class CreateExpenseCategories < ActiveRecord::Migration[5.1]
  def change
    create_table :expense_categories do |t|
      t.string :name, null: false
      t.belongs_to :department, foreign_key: true, null: false

      t.timestamps
    end
  end
end
