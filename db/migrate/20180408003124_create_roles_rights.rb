class CreateRolesRights < ActiveRecord::Migration[5.1]
  def change
    create_table :roles_rights do |t|
      t.belongs_to :role, foreign_key: true
      t.belongs_to :right, foreign_key: true

      t.timestamps
    end
  end
end
