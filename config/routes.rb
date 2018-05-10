Rails.application.routes.draw do

  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    get '/login_employee/', to: 'employees#active_employee'
    get '/validate_invitation/:token', to: 'invitations#validate_invite'
    get '/all_managed_jobs/', to: 'jobs#all_managed_jobs'
    get '/week_shifts/:start_date', to: 'shifts#week_shifts'
    resources :shifts 
    resources :employee_jobs
    resources :employees
    resources :daily_occupancies 
    resources :departments do 
      resources :jobs
    end 
    resources :hotels do 
      get '/week_occupancies/:start_date', to: 'daily_occupancies#week_occupancies'
    end 
     
    #API ROUTES SHOULD GO HERE
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
