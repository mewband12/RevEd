class Api::V1::ModsController < ApplicationController
  skip_before_action :authenticate_user!, only: %i[index show]
  def index
    @mods = Mod.all
    render json: @mods
  end

  def show
    @mod = Mod.find(params[:id])
    render json: @mod
  end
end
