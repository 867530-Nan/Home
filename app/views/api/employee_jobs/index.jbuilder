json.array! @employee_jobs do |ej|
  json.id ej.id
  json.employee_id ej.employee_id
  json.job_id ej.job_id
  json.first_name ej.employee.first_name
  json.last_name ej.employee.last_name
  json.pay_type ej.pay_type
  json.pay_rate ej.pay_rate 
end 