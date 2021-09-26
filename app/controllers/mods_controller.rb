class ModsController < ApplicationController
  def show
    @module = Mod.find(params[:id])
    # raise
  end
end
