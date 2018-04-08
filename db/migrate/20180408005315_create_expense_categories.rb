class CreateExpenseCategories < ActiveRecord::Migration[5.1]
  def change
    create_table :expense_categories do |t|
      t.string :name
      t.belongs_to :department, foreign_key: true

      t.timestamps
    end
  end
end
