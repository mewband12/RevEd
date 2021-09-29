class AddFieldsToReview < ActiveRecord::Migration[6.1]
  def change
    add_column :reviews, :before_grade, :string
    add_column :reviews, :hourly_input, :string
    add_column :reviews, :exm_difficulty, :string
    add_column :reviews, :nature, :string
    add_column :reviews, :learning_approach, :string
  end
end
