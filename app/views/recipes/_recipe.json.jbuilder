json.extract! recipe, :id, :name, :time, :serving, :url, :ingredients, :methods, :type, :created_at, :updated_at
json.url recipe_url(recipe, format: :json)
