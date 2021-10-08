class Api::V1::ReviewmodcountsController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index]
  def index
    def index
      modreview = {}
      Review.ids.each do |id|
        modreview[id] = Review.where(mod_id: id).count
      end
      render json: modreview
    end



    def count_reviews(department)
      count = 0
      department.mods.each do |mod|
        count += mod.reviews.count
      end
      return count
    end
  end
end
