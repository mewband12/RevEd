class AddPhotokeyToUniversities < ActiveRecord::Migration[6.1]
  def change
    add_column :universities, :photo_key, :string
  end
end
