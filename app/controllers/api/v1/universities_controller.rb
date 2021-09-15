class Api::V1::UniversitiesController < ApplicationController
  def index
    @universities = University.all
    render json: @universities
  end

  def show
    @university = Post.find(params[:id])
    render json @university
  end
end
