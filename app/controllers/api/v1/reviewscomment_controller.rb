class Api::V1::ReviewscommentController < ApplicationController
  def index
    @reviews = Review.where(mod_id: params[:mod_id])
    render json: @reviews
  end
end
