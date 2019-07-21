class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  rescue_from CanCan::AccessDenied do |exception|
  redirect_to main_app.root_url, alert: exception.message
      
    before_filter :redirect_subdomain

    def redirect_subdomain
      if request.host == 'www.thenevermorehaunt.com'
        redirect_to 'thenevermorehaunt.com' + request.fullpath, :status => 301
      end
end
end
end
