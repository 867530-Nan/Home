class CreateRolesRights < ActiveRecord::Migration[5.1]
  def change
    create_table :roles_rights do |t|
      t.belongs_to :role, foreign_key: true, null: false
      t.belongs_to :right, foreign_key: true, null: false

      t.timestamps
    end
  end
end
