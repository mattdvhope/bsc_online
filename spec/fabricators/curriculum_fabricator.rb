Fabricator(:curriculum) do
  name { Faker::Lorem.word.capitalize }
  description { Faker::Company.bs.capitalize }
end