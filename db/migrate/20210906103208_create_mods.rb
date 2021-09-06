class CreateMods < ActiveRecord::Migration[6.1]
  def change
    create_table :mods do |t|
      t.string :name
      t.string :description
      t.integer :year
      t.references :department, null: false, foreign_key: true
      t.references :university, null: false, foreign_key: true

      t.timestamps
    end
  end
end
