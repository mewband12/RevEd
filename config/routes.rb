Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'reviews/create'
      get 'reviews/destroy'
    end
  end
  namespace :api do
    namespace :v1 do
      get 'reviewscomment/index'
    end
  end
  devise_for :users
  root to: 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :universities, only: [:index, :show]
  resources :departments, only: [:index, :show]
  resources :mods, only: [:show] do
    resources :reviews, only: [:create, :destroy]
    resources :discussions, only: [:index]
  end
  # add user profile later

  # API
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :universities, only: [ :index, :show ]
      resources :universitiesphotos, only: [:index]
      resources :reviewcounts, only: [ :index, :show ]
      resources :reviewdepcounts, only: [:index, :show]
      resources :reviewmodcounts, only: [:index]
      resources :departments, only: [:index, :show ]
      resources :users, only: [:index, :show]
      resources :mods, only: [:index, :show] do
        resources :reviews, only: [:create, :destroy]
        resources :reviewscomment, only: [:index]
        resources :reviewsummary1, only: [:index]
      end
      resources :checkenv, only: [:index]
    end
  end

end
