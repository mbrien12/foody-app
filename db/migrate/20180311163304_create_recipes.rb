class CreateRecipes < ActiveRecord::Migration[5.1]
  def change
    create_table :recipes do |t|
      t.string :name
      t.string :time
      t.integer :serving
      t.string :url
      t.text :ingredients
      t.text :methods
      t.string :type

      t.timestamps
    end
  end
end
