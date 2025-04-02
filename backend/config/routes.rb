Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'up', to: 'health#show'
    end
  end
end
