class DepartmentsController < ApplicationController
  def index
    @department = Department.find(params[:id])
  end
end
