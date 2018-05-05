class CreateInvitations < ActiveRecord::Migration[5.1]
  def change
    create_table :invitations do |t|
      t.belongs_to :employee
      t.string :token
      t.timestamps
    end
  end
end
