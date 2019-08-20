Rails.application.routes.draw do
  resources :histories
  constraints(host: /^www\./i) do
    match '(*any)' => redirect { |params, request|
      URI.parse(request.url).tap { |uri| uri.host.sub!(/^www\./i, '') }.to_s 
    }, via: [:get, :post]
  end
  resources :tickets
  resources :photos
  resources :hours
  resources :faqs
  resources :attractions
  resources :directions
  resources :waiver
  resources :history
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
    
  get 'simple_pages/waiver'
    
  get 'simple_pages/history'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html      
    
  get 'simple_pages/index'

  root 'simple_pages#index'
  #sets homepage for app

  get 'simple_pages/index'
    
  get '/rules-warnings/', to: redirect('/faqs', status: 301)
    
  get '/faq/', to: redirect('/faqs', status: 301)
    
  get '/Haunted-Houses-Near-Me/', to: redirect('/attractions', status: 301)
    
  get '/manor-hill-tavern-haunt-tour/', to: redirect('/attractions', status: 301)
    
  get '/history/', to: redirect('/', status: 301)
    
  get '/directions/', to: redirect('/attractions', status: 301)
   
  get '/manor-hill-tavern-haunt-tour/', to: redirect('/', status: 301)
    
  get '/polarbearplunge/', to: redirect('/', status: 301)

  get '/media/', to: redirect('/photos', status: 301)
    
  get '/fells-point-shuttle/', to: redirect('/directions', status: 301)

 
end
