json.id @employee.id
json.first_name @employee.first_name
json.last_name @employee.last_name 
json.email @employee.email_address
json.hotel @employee.hotel_id
json.jobs @employee.jobs_objects
json.visible_departments @employee.visible_departments
json.visible_employees(@employee.visible_employees) do |employee|
  json.id employee.id
  json.first_name employee.first_name 
  json.last_name employee.last_name 
  json.departments employee.show_departments
end 


