require 'sinatra'
require 'tilt/haml'

enable :sessions

get '/' do
  haml :workout, layout: :layout
end

post '/madlibs' do
  session[:name] = params[:name]
  redirect '/workout_two'
end

get '/workout_two' do
  @name = session[:name]
  puts @name
  haml :workout_two, layout: :layout
end

