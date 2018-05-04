json.array! @employees.array do |employee|
  json.id employee.id
  json.first_name employee.first_name 
  json.last_name employee.last_name 
  json.jobs employee.jobs_objects
end 