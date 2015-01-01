namespace :guests do
  desc "Remove guest accounts more than a week old."
  task :cleanup => :environment do # ':environment' loads the Rails environment.
    User.where(guest: true).where("created_at < ?", 5.minutes.ago).destroy_all
  end # This means that the guest's account will be gone within a week, so I should suggest that the guest moves to a permanent account if he wants to save his data.
end