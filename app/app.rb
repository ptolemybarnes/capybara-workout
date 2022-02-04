require 'sinatra'
require 'tilt/haml'

enable :sessions

get '/' do
  erb :instructions, layout: :layout
end

get '/workout' do
  erb :workout, layout: :layout
end

post '/finish' do
  p params
  session[:your_name] = params[:your_name]
  session[:coach_name] = params[:coach_name]
  redirect '/finish'
end

get '/finish' do
  @your_name = session[:your_name]
  @coach_name = session[:coach_name]
  erb :finish, layout: :layout
end

