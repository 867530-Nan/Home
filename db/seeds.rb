hotel = Hotel.create(name: "Holiday Inn", phone_number: "5555555555", number_of_rooms: 100, manager_name: "Joe Shmo")
Address.create(addressable: hotel, street: "7512 Blackberry Ave", city: "Salt Lake City", state: "Utah", zip: 84105, country: "USA")
d = hotel.departments.create(name: "Management")

email_address = "test@test.com"
j = Job.create(name: "General Manager", pay_type: "salary", department: d)
u = User.create_with(password: "Testtest123", password_confirmation: "Testtest123").find_or_initialize_by(email: email_address)
u.save(validate: false)
e = Employee.create(user: u, first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, phone_number: "8015555555", email_address: email_address)
EmployeeJob.create(employee: e, job: j, pay_rate: 100000)

["Front Desk", "Housekeeping", "Food/Beverage"].each do |n|
  d = hotel.departments.create(name: n)
  d.children.create(name: "#{n} Sub 1")
  email_address = Faker::Internet.email
  u = User.create_with(password: "Testtest123", password_confirmation: "Testtest123").find_or_initialize_by(email: email_address)
  e = Employee.create(user: u, first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, phone_number: "8015555555", email_address: email_address)
  j = Job.create(name: "Department Head", pay_type: "salary", department: d)
  EmployeeJob.create(employee: e, job: j, pay_rate: 80000)
end 



