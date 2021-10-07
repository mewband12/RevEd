class Api::V1::Reviewsummary1Controller < ApplicationController
  def index
    @reviews = Review.where(mod_id: params[:mod_id])
    grade = @reviews.average(:grade)
    before_grade = @reviews.average(:before_grade)
    rating = @reviews.average(:rating)
    hourly_input = @reviews.average(:hourly_input)
    nature = @reviews.average(:nature)
    render json: {grade: grade, before_grade: before_grade, rating: rating, hourly_input: hourly_input}
  end
end
