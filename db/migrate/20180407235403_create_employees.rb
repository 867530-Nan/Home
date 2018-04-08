class CreateEmployees < ActiveRecord::Migration[5.1]
  def change
    create_table :employees do |t|
      t.string :first_name, :string, null: false
      t.string :last_name, :string, null: false 
      t.string :phone_number, :string
      t.string :email_address, :string
      t.belongs_to :user, :string

      t.timestamps
    end
  end
end
