class RenameColumnMethod < ActiveRecord::Migration[5.1]
  def change
    rename_column :Recipes, :method, :instructions
  end
end
