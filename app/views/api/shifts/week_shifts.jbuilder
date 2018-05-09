json.array! @shifts do |shift|
  json.id shift.id
  json.employee_job_id shift.employee_job.id
  json.start_day shift.shift_start.strftime("%m/%d/%Y")
  json.shift_start shift.shift_start.strftime("%l:%M %p")
  json.shift_end shift.shift_end.strftime("%l:%M %p")
end 