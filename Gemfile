source 'https://rubygems.org'
ruby '2.2.0'

gem 'rails', '4.2.0'
gem 'bootstrap-sass'
gem 'bootstrap_form'
gem 'autoprefixer-rails' # To work with bootstrap. It automatically adds the proper vendor prefixes to your CSS code when it is compiled.
gem 'bcrypt'
gem 'haml-rails'
gem 'sass-rails', '~> 5.0.0'
gem 'uglifier', '>= 1.3.0' # compressor for JavaScript assets; coffeescript
gem 'jquery-rails'
gem 'sidekiq'
gem 'jbuilder', '~> 2.0' # Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'passenger'
gem 'pg'
gem "sentry-raven" # A gem for error monitoring ; After installing the ‘sentry-raven’ gem, you can go to your Sentry dashboard (through Heroku) and to see run time errors.
gem 'paratrooper' # for setting up the Heroku staging environment
gem 'carrierwave' # To work with app/uploaders/...
gem 'carrierwave-aws' # For Amazon S3; replaces 'fog'
gem 'mini_magick'
gem 'figaro' # creates the 'config/application.yml' file (in gitignore)
gem 'draper' # For using decorators
gem 'turbolinks' # Turbolinks makes following links in your web application faster. Read more: https://github.com/rails/turbolinks
# gem 'sdoc', '~> 0.4.0', group: :doc # bundle exec rake doc:rails generates the API under doc/api.
gem 'simple_form'
gem "cocoon"
gem 'responders'

group :development do
  gem 'spring' # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem "better_errors"
  gem "binding_of_caller"
  gem 'letter_opener'
end

group :development, :test do
  gem 'rspec-rails'
  gem 'fabrication'
  gem 'faker'
  gem 'pry'
  gem 'pry-nav'
end

group :test do
  gem 'shoulda-matchers'
  gem 'capybara' # For making 'feature' specs / tests
  gem 'launchy'
  gem 'capybara-email'
  gem 'vcr'
  gem 'webmock'
  gem 'selenium-webdriver' # A test-runner for use with capybara when 'js: true' (when Javascript is used on the page that is being feature-tested).
  gem 'database_cleaner' # If we use 'selenium-webdriver' as the test-runner, then we need this gem to clean the db.
end

group :production do
  gem 'rails_12factor'
end


