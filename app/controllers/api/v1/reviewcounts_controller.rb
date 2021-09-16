class Api::V1::ReviewcountsController < ApplicationController
  def index
    @universities = University.all
    unireviews = {}
    @universities.each do |uni|
      unireviews[uni.name] = count_reviews(uni)
    end
    render json: unireviews
  end

  def show
    @university = Post.find(params[:id])
    render json: @university
  end


  def count_reviews(university)
    count = 0
    university.mods.each do |mod|
      count += mod.reviews.count
    end
    return count
  end
end
