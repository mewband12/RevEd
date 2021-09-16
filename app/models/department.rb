class Department < ApplicationRecord
  belongs_to :university
  has_many :mods
end
