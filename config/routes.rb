Rails.application.routes.draw do

  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    resources :hotels do 
      post '/departments/create_multiple/', to: 'departments#create_multiple'
      post '/subdepartments/create_multiple', to: 'subdepartments#create_multiple'
      resources :departments do
        get '/expense_cateogries/', to: 'expense_categories#by_department' 
      end 
      resources :subdepartments 
    end 
     
    #API ROUTES SHOULD GO HERE
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
