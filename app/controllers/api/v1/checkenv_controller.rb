class Api::V1::CheckenvController < ApplicationController
  def index
    render json: Rails.env.development?
  end
end
