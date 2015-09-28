require 'sinatra'
require 'tilt/haml'

get '/' do
  haml :index, layout: :layout
end

get '/workout' do
  haml :workout, layout: :layout
end
