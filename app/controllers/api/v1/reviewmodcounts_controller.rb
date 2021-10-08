class Api::V1::ReviewmodcountsController < ApplicationController
  def index
    skip_before_action :authenticate_user!, only: %i[index show]
    def index
      # @modules = Module.all
      # modreviews = {}
      # @modules.each do |dep|
      #   depreviews[dep.id] = count_reviews(dep)
      # end
      # render json: depreviews
      raise
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
