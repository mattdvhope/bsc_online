Rails.application.routes.draw do

  root to: "pages#front"
  get 'home', to: 'courses#index'

  resources :courses, only: [:index, :show]

  resources :users, only: [:create, :show]
  get 'register', to: "users#new"

  get 'sign_in', to: "sessions#new"
  resources :sessions, only: [:create]
  get 'sign_out', to: "sessions#destroy"



  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable
end
