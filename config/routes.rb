Rails.application.routes.draw do

  root to: "pages#front"
  get 'home', to: "courses#show", defaults: { id: 1 }

  get 'sign_up', to: "users#new"
  resources :users, only: [:create]

  resources :curriculums, only: [:index, :show] do
    resources :courses, only: [:show] do
      resources :assessments, only: [:show]
      namespace :admin do
        resources :assessments, only: [:index, :new, :create, :edit, :update]
      end
    end
  end

  resources :parts, only: [:show] do
    resources :lessons, only: [:index, :show] do
      with_options only: [:index, :show] do |list_only|
        list_only.resources :stories
        list_only.resources :conversations
        list_only.resources :practices
      end
    end
  end

  resources :choices, only: [:update]

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
