class Api::V1::ReviewsController < ApplicationController
  protect_from_forgery with: :null_session
  def create
    @review = Review.new(review_params)

    if @review.save
      render json: @review
    else
      render json: @review.errors
    end
  end

  def update
  end

  private

    def review_params
      params.permit(:rating, :review, :grade)
    end
end
