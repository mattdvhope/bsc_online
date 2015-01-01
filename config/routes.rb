Rails.application.routes.draw do

  root to: "pages#front"
  get 'home', to: "courses#show"

  get 'sign_up', to: "users#new"
  resources :users, only: [:create]

  resources :curriculums, only: [:index, :show] do
    resources :courses, only: [:show, :index]
  end

  resources :parts, only: [:show, :index] do
    resources :lessons, only: [:show, :index]
  end
  
  resources :stories, only: [:show] do
    resources :text_hundred_thais, only: [:show]
    resources :text_english_seventy_thais, only: [:show]
    resources :text_english_fifty_thais, only: [:show]
    resources :text_english_twenty_thais, only: [:show]
    resources :text_english_zero_thais, only: [:show]
  end  
  
  resources :conversations, only: [:show]
  resources :practices, only: [:show]

  get 'log_in', to: "sessions#new"
  resources :sessions, only: [:create]

  resources :plans, except: [:destroy]

  get 'log_out', to: "sessions#destroy"

  get 'ui(/:action)', controller: 'ui'

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
