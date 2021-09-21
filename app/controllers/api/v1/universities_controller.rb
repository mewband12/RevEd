class Api::V1::UniversitiesController < ApplicationController
  skip_before_action :authenticate_user!, only: %i[index show]
  def index
    @universities = University.all
    render json: @universities
  end

  def show
    @university = University.find(params[:id])
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
