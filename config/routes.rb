Rails.application.routes.draw do

  get 'volunteer_for_student/index'

  get 'home/index'

  root to: "pages#front"


  # Serve websocket cable requests in-process
  mount ActionCable.server => '/cable'

  resources :chatrooms, only: [:show]
  resources :messages


  
  get 'volunteer_info', to: "pages#volunteer_info"
  get 'dashboard', to: "pages#dashboard"
  get 'applicants_list', to: "pages#applicants_list"

  get 'build', to: "pages#build"
  get 'contact', to: "pages#contact"
  get 'about', to: "pages#about"

  get 'new_admin', to: "users#new_admin"
  get 'register_admin', to: "users#register_admin"
  get 'register_vol', to: "users#register_vol"

  resources :class_times, only: [:index, :show, :new, :create]

  get 'volunteers/users/:id', to: "users#show"
  get 'volunteers/volunteers', to: "users#volunteers"

  resources :volunteers_available, only: [:index, :show]

  resources :skype_time_slots, only: [:index, :show, :create, :update, :destroy]

  get 'register_student', to: "users#new"
  resources :users, only: [:index, :show, :create, :update]

  get "/users/:id/approve_admin", to: "users#approve_admin"
  get "/users/:id/disapprove_admin", to: "users#disapprove_admin"

  resources :volunteer_for_student, only: [:index, :show]

  resources :admin_applications, only: [:edit, :update]
  get "/admin_applications/:id/email_admin_application_approval", to: "admin_applications#email_admin_application_approval"

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

  get 'log_in', to: "sessions#log_in" # action doesn't really matter here since Backbone is taking over routing with this path

  get 'auth/:provider/callback', to: 'sessions#create' # for Facebook login

  resources :sessions, only: [:create]
  get 'log_out', to: "sessions#destroy"

  # for unsubscribing from an email sent from this app
  get '/users/unsubscribe/:signature' => 'users#unsubscribe', as: 'unsubscribe'

  get 'ui(/:action)', controller: 'ui'

  # This 'match' MUST BE AT THE BOTTOM OF THIS FILE!!!!
  # match "*missing" => redirect("/"), via: :get # redirects to root if meaningless text is typed after '/'

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
