require "test_helper"

class ModsControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get mods_show_url
    assert_response :success
  end
end
