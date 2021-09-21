class Api::V1::DepartmentsController < ApplicationController
  skip_before_action :authenticate_user!, only: %i[index show]
  def index
    @departments = Department.all
    render json: @departments
  end
end
