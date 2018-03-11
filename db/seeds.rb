require 'faker'

10.times {
  Recipe.create(
    name: Faker::Food.dish,
    time: "30 mins",
    serving: 4,
    url: "www.website.com",
    ingredients: Faker::Food.ingredient,
    methods: "Mix it all together",
    category: ["breakfast", "lunch", "dinner"].sample,
    image: "www.image.com"
  )
}



# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)