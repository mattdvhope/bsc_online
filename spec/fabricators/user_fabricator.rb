Fabricator(:user) do
  first_name { Faker::Name.first_name }
  last_name { Faker::Name.last_name }
  email { Faker::Internet.email }
  password 'password'
  password_confirmation 'password'
  postal_code 10652
end

Fabricator(:guest, from: :user) do
  first_name nil
  last_name nil
  email nil
  password nil
  password_confirmation nil
  postal_code nil
  guest true
  plans [Plan.create(curriculum_id: 1, description: "great")]
end
