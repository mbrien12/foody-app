class RenameColumn < ActiveRecord::Migration[5.1]
  def change
    rename_column :Recipes, :type, :category
    add_column :Recipes, :image, :string
  end
end
