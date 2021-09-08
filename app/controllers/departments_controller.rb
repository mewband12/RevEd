class DepartmentsController < ApplicationController
  def index
    @department = Department.find(params[:id])
    @module = Module.find(params[:id])
  end
end
