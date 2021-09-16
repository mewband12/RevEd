class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :home ]

  def home
    @modules = Mod.all
    # render json: @modules
    @universities = University.all
  end
  raise
  def count_reviews(university)
    count = 0
    university.mods.each do |mod|
      count += mod.reviews.count
    end
    return count
  end
end
