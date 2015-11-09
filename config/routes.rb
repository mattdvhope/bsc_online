Rails.application.routes.draw do

  root to: "pages#front"
  get 'home', to: "courses#show", defaults: { id: 1 }
  get 'build', to: "pages#build"
  get 'contact', to: "pages#contact"
  get 'about', to: "pages#about"

  resources :events

  get 'sign_up_student', to: "users#new"
  get 'sign_up_teacher', to: "users#new"
  resources :users, only: [:create]

  resources :appraisals, only: [:index]

  resources :curriculums, only: [:index, :show] do
    resources :courses, only: [:show] do
      resources :assessments, only: [:show]
      namespace :admin do
        resources :assessments, only: [:index, :new, :create, :edit, :update]
      end
    end
  end

  resources :choices, only: [:index, :show, :edit]

  resources :grades, only: [:show, :index, :update]

  namespace :admin do
    resources :curriculums, only: [:new, :create, :edit, :update]
  end

  namespace :admin do
    resources :courses, only: [:new, :create, :edit, :update]
  end

  namespace :admin do
    resources :parts, only: [:new, :create, :edit, :update]
  end

  namespace :admin do
    resources :lessons, only: [:new, :create, :edit, :update]
  end

  resources :parts, only: [:show] do
    resources :lessons, only: [:show] do
      with_options only: [:index, :show] do |list_only|
        list_only.resources :stories
        list_only.resources :conversations
        list_only.resources :practices
      end
    end
  end

  resources :plans, except: [:destroy]

  get 'log_in_student', to: "sessions#log_in_student" # action doesn't really matter here since Backbone is taking over routing with this path
  get 'log_in_teacher', to: "sessions#log_in_teacher" # action doesn't really matter here since Backbone is taking over routing with this path
  resources :sessions, only: [:create]
  get 'log_out', to: "sessions#destroy"

  get 'ui(/:action)', controller: 'ui'

  # This 'match' MUST BE AT THE BOTTOM OF THIS FILE!!!!
  match "*missing" => redirect("/"), via: :get # redirects to root if meaningless text is typed after '/'

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
