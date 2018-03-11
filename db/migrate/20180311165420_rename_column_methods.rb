class RenameColumnMethods < ActiveRecord::Migration[5.1]
  def change
    rename_column :Recipes, :methods, :method
  end
end
