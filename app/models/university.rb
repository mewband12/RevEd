class University < ApplicationRecord
  belongs_to :country
  has_many :departments
  has_many :mods
  has_one_attached :photo
end
