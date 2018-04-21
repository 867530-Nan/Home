class ApplicationController < ActionController::API
  include DeviseTokenAuth::Concerns::SetUserByToken
  
  def render_error(model)
    errors = model.errors.full_messages.join(",")
    render json: {errors: errors}, status: 418
  end 
end
