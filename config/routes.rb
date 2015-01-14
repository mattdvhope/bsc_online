Rails.application.routes.draw do

  root to: "pages#front"
  get 'home', to: "courses#show"

  get 'sign_up', to: "users#new"
  resources :users, only: [:create]

  resources :curriculums, only: [:index, :show] do
    resources :courses, only: [:show, :index]
  end

  resources :parts, only: [:index, :show] do
    resources :lessons, only: [:index, :show] do
      resources :stories, only: [:index, :show]
      resources :conversations, only: [:index, :show]
      resources :practices, only: [:index, :show]
    end
  end
  
  resources :assessments, except: [:destroy]

  resources :plans, except: [:destroy]

  get 'log_in', to: "sessions#new"
  resources :sessions, only: [:create]

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
