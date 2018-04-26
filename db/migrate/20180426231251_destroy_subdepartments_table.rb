class DestroySubdepartmentsTable < ActiveRecord::Migration[5.1]
  def change
    drop_table :subdepartments
  end
end
