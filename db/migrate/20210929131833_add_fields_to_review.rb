class AddFieldsToReview < ActiveRecord::Migration[6.1]
  def change
    add_column :reviews, :before_grade, :integer
    add_column :reviews, :hourly_input, :integer
    add_column :reviews, :exm_difficulty, :integer
    add_column :reviews, :nature, :integer
    add_column :reviews, :learning_approach, :string
    add_column :reviews, :personality, :string
  end
end
