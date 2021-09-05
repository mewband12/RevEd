Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :universities, only: [:index, :show]
  resources :departments, only: [:index]
  resources :modules, only: [:show] do
    resources :reviews, only: [:create, :destroy]
    resources :discussions, only: [:show]
  end
  # add user profile later

end
