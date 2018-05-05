class UserMailer < ApplicationMailer
  default :template_path => 'mailers/user_mailer'

  def send_invitation(invitation)
    @employee = invitation.employee
    @url = "localhost:3000/register?token=#{invitation.token}"
    mail(to: @employee.email_address, subject: "Welcome to HOME" )
  end 

end