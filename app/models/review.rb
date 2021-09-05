class Review < ApplicationRecord
  belongs_to :mod
  belongs_to :user
end
