class Country < ApplicationRecord
  has_many :universities, dependent: :destroy
end
