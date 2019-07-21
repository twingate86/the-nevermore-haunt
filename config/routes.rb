Rails.application.routes.draw do
  resources :tickets
  resources :photos
  resources :hours
  resources :faqs
  resources :attractions
  resources :directions
  get 'attractions/index'

  devise_for :users
  resources :users
  get 'simple_pages/home'

  get 'simple_pages/attractions'

  get 'simple_pages/hours'

  get 'simple_pages/directions'

  get 'simple_pages/tickets'

  get 'simple_pages/photos'

  get 'simple_pages/faq'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html      
    
  get 'simple_pages/index'

  root 'simple_pages#index'
  #sets homepage for app

  get 'simple_pages/index'
    
  get '/rules-warnings', to: redirect('/faq', status: 301)
    
  get '/Haunted-Houses-Near-Me', to: redirect('/attrations', status: 301)

end
