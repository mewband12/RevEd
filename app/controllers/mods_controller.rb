class ModsController < ApplicationController
  def show
    @module = Module.find(params[:id])
  end
end
