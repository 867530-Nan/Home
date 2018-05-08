hotel = Hotel.create(name: "Holiday Inn", phone_number: "5555555555", number_of_rooms: 100, manager_name: "Joe Shmo")
Address.create(addressable: hotel, street: "7512 Blackberry Ave", city: "Salt Lake City", state: "Utah", zip: 84105, country: "USA")
d = hotel.departments.create(name: "Management")

#CREATE GM
email_address = "test@test.com"
j = Job.create(name: "General Manager", pay_type: "salary", department: d)
e = Employee.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, phone_number: "8015555555", email_address: email_address)
u = User.create_with(password: "Testtest123", password_confirmation: "Testtest123").find_or_initialize_by(email: email_address)
u.save(validate: false)
EmployeeJob.create(employee: e, job: j, pay_rate: 100000)

#CREATE FOOD AND BEVERAGE DIRECTOR
email_address = "foodbev@test.com"
fb = d.children.create(name: "Food and Beverage")
j = Job.create(name: "Director of Food and Beverage", pay_type: "salary", department: fb)
e = Employee.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, phone_number: "8015555555", email_address: email_address)
u = User.create_with(password: "Testtest123", password_confirmation: "Testtest123").find_or_initialize_by(email: email_address)
u.save(validate: false)
EmployeeJob.create(employee: e, job: j, pay_rate: 100000)

restaurants = fb.children.create(name: "Restaurants")
catering = fb.children.create(name: "Catering")

email_address = "catering@test.com"
j = Job.create(name: "Director of Catering", pay_type: "salary", department: catering)
e = Employee.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, phone_number: "8015555555", email_address: email_address)
u = User.create_with(password: "Testtest123", password_confirmation: "Testtest123").find_or_initialize_by(email: email_address)
u.save(validate: false)
EmployeeJob.create(employee: e, job: j, pay_rate: 85000)

["Chinese", "Italian"].each do |n|
  dept = restaurants.children.create(name: n)
  email_address = "#{n}_manager@test.com"
  e = Employee.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, phone_number: "8015555555", email_address: email_address)
  u = User.create_with(password: "Testtest123", password_confirmation: "Testtest123").find_or_initialize_by(email: email_address)
  j = Job.create(name: "Restaurant Manager", pay_type: "salary", department: dept)
  u.save(validate: false)
  EmployeeJob.create(employee: e, job: j, pay_rate: 50000)
end 





