Rails.application.routes.draw do

  root to: "pages#front"
  get 'home', to: "plans#index"

  get 'sign_up', to: "users#new"
  resources :users, only: [:create, :show]

  resources :curriculums, only: [:index, :show] do
    resources :courses, only: [:show]
  end

  get 'log_in', to: "sessions#new"
  resources :sessions, only: [:create]


  resources :plans, except: [:destroy]
  resources :course_registrations, only: [:new, :create, :index]

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
