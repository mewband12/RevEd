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

UNIVERSITIES = ["Warwick University", "Bristol", "Imperial College London", "Cambridge University", "Oxford University", "Birmingham University", "University of Exeter"]


UNIVERSITIES.each do |uni|
university = University.new name: uni,
                            country: first_country
university.save!
end

## Lets start with Warwick University

DEPARTMENTS_WARWICK = ["Mathematics", "Economics", "Computer Science", "Arts", "Law", "Engineering", "Business"]
DEPARTMENTS_BRISTOL = ["Mathematics", "Economics", "Computer Science", "Arts", "Law", "Engineering", "Business"]
DEPARTMENTS_WARWICK.each do |dep|
  department = Department.new name: dep,
                              description:"best department :)",
                              university: University.first
  department.save!
end
DEPARTMENTS_BRISTOL.each do |dep|
  department = Department.new name: dep,
                              description:"best department :)",
                              university: University.second
  department.save!
end

first_warwick_department = Department.first
comsci_warwick_department = Department.third

MODULE_MATHS_WARWICK = ["Fluid Dyanamics", "Mathematics of Machine Learning", "Physics of Weather and the Environment", "Complex Analysis"]
MODULE_COMPSCIS_WARWICK = ["Software Engineering", "Machine Learning", "Game Design", "Computer vision"]
MODULE_MATHS_BRISTOL = ["Fluid Dyanamics", "Mathematics of Machine Learning", "Physics of Weather and the Environment", "Complex Analysis"]
MODULE_COMPSCIS_BRISTOL = ["Software Engineering", "Machine Learning", "Game Design", "Computer vision"]
Year = [1,2,3,4]
MODULE_MATHS_WARWICK.each do |mod|
  mod = Mod.new name: mod,
                description: "Module about fluids",
                year: Year.sample,
                department: first_warwick_department,
                university: University.first
  mod.save!
end

MODULE_COMPSCIS_WARWICK.each do |mod|
  mod = Mod.new name: mod,
                description: "Module about fluids",
                year: Year.sample,
                department: comsci_warwick_department,
                university: University.first
  mod.save!
end

first_bristol_department = Department.all[7]
comsci_bristol_department = Department.all[9]

MODULE_MATHS_BRISTOL.each do |mod|
  mod = Mod.new name: mod,
                description: "Module about fluids",
                year: Year.sample,
                department: first_bristol_department,
                university: University.second
  mod.save!
end

MODULE_COMPSCIS_BRISTOL.each do |mod|
  mod = Mod.new name: mod,
                description: "Module about fluids",
                year: Year.sample,
                department: comsci_bristol_department,
                university: University.second
  mod.save!
end

first_module = Mod.first
10.times do
  review = Review.new rating: 4,
                      review: "bad module",
                      grade: 85,
                      mod: Mod.first,
                      user: first_user,
                      before_grade: 65,
                      hourly_input: 10,
                      exm_difficulty: 8
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
