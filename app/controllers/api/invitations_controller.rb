class Api::InvitationsController < ApplicationController
  def validate_invite
    employee = Invitation.find_by(token: params[:token]).try(:employee)
    if employee.present?
      if employee.user.present?
        render json: {errors: ["Invitation has already been used"]}, status: 418
      else 
        render json: employee
      end 
    else 
      render json: {errors: ["Invalid invitation token"]}, status: 418
    end 
  end 

end
