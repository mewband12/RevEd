class Api::V1::UniversitiesphotosController < ApplicationController
  skip_before_action :authenticate_user!, only: %i[index]
  def index
    raise
  end
end
