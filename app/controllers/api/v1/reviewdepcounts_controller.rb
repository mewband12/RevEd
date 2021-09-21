class Api::V1::ReviewdepcountsController < ApplicationController
  skip_before_action :authenticate_user!, only: %i[index show]
  def index
    @departments = Department.all
    depreviews = {}
    @departments.each do |dep|
      depreviews[dep.id] = count_reviews(dep)
    end
    render json: depreviews
  end

  def show
    @university = Post.find(params[:id])
    render json: @university
  end


  def count_reviews(department)
    count = 0
    department.mods.each do |mod|
      count += mod.reviews.count
    end
    return count
  end
end
