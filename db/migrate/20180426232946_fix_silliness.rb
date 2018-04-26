class FixSilliness < ActiveRecord::Migration[5.1]
  def change
    remove_column :employees, :string
    remove_column :employees, :string_id
  end
end
