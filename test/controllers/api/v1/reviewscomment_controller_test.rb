require "test_helper"

class Api::V1::ReviewscommentControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_v1_reviewscomment_index_url
    assert_response :success
  end
end
