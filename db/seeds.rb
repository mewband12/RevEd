# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require "open-uri"

CUISINES = %w[chinese italian japanese french belgian american indian ethiopian cuban indonesian filipino]

puts "🔫 Destroy everything ..."
User.destroy_all
Country.destroy_all
University.destroy_all
Department.destroy_all
Comment.destroy_all
Discussion.destroy_all
Mod.destroy_all
Post.destroy_all
Review.destroy_all



user = User.new email: "test0@email.com",
                password: '123456',
                password_confirmation: '123456'
user.save!
first_user = User.first

10.times do
  country = Country.new name: "United Kingdom"
  country.save!
end
first_country = Country.first

  10.times do
  university = University.new name:"Warwick University",
                              country: first_country
  university.save!
  end

first_university = University.first

10.times do
  department = Department.new name:"Mathematics",
                              description:"best department :)",
                              university: first_university
  department.save!
end
first_department = Department.first
10.times do
  mod = Mod.new name: "Fluid Dyanamics",
                description: "Module about fluids",
                year: 2012,
                department: first_department,
                university: first_university
  mod.save!
end
first_module = Mod.first
10.times do
  review = Review.new rating: 4,
                      review: "bad module",
                      grade: "1st class honours",
                      mod: first_module,
                      user: first_user
  review.save!
end
10.times do
  discussion = Discussion.new mod: first_module
  discussion.save!
end
first_discussion = Discussion.first
10.times do
  post = Post.new content: "baddy module",
                  user: first_user,
                  discussion: first_discussion
  post.save!
end
first_post = Post.first

10.times do
  comment = Comment.new content: "blahblah",
                        user: first_user,
                        post: first_post
  comment.save!
end
puts "🌲 Seed complete ... #{User.count} Users / #{Country.count} country / University #{University.count} / Department #{Department.count}/ module #{Mod.count}/ review #{Review.count}/ discussion #{Discussion.count}/ post #{Post.count} / comment #{Comment.count}"
