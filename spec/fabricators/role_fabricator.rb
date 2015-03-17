Fabricator(:role) do # This will inherit all of the attributes from the Fabricator(:user) above.
  overseer { Fabricate(:user, email: Faker::Internet.email) }
end