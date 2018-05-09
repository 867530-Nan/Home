class Api::JobsController < ApplicationController
  before_action :get_department, only: [ :index, :create, :update, :destroy ]

  def index 
    render json: @department.jobs 
  end

  def all_managed_jobs
    @jobs = Job.where(department_id: current_user.employee.managed_dept_ids)
    render json: @jobs
  end 
  
  def create 
    job = @department.jobs.new(job_params)
    if job.save 
      render json: job
    else 
      render_error(job)
    end 
  end 

  def update 
    if @department.jobs.update(job_params)
      render json: @job 
    else
      render_error(@job)
    end
  end 

  def destroy 
    binding.pry
    @job.destroy 
  end 


  private 
  def job_params 
    params.require(:job).permit(:name, :pay_type, :pay_rate)
  end
  
  def get_job 
    @job = Job.find(params[:id])
  end 

  def get_department 
    @department = Department.find(params[:department_id])
  end 

  def render_error(job)
    errors = job.errors.full_messages.join(",")
    render json: {errors: errors}, status: 422
  end
  
end 