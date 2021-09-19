class Mod < ApplicationRecord
  belongs_to :department
  belongs_to :university
  has_many :reviews

  def avg_rating
    reviews.average(:rating)&.to_f
  end
end
