require 'rails_helper'

feature 'User signs in' do

  background do
    @alice = Fabricate(:user, email: "alice@test.tv")
  end

  scenario "with existing email address" do
    visit sign_in_path
    fill_in "Email Address", with: "alice@test.tv" # To 'fill_in', you can use the field-name (in the users table) or the label tag ('Email Address', in this case [which is BEST PRACTICE]) which is on the 'sessions/new.html.haml' page; Or, you can use an id.  Capybara will read any of the three.
    fill_in "Password", with: "password"
    click_button "Let's study English!"
    expect(page).to have_content @alice.first_name
  end
end