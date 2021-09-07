class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :home ]

  def home
    @modules = Mod.all
    # render json: @modules
  end
end
