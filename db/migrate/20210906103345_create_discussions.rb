class CreateDiscussions < ActiveRecord::Migration[6.1]
  def change
    create_table :discussions do |t|
      t.references :mod, null: false, foreign_key: true

      t.timestamps
    end
  end
end
