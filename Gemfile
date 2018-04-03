source 'https://rubygems.org'
ruby '2.3.3'

gem 'rails', '5.0.0.1'
gem 'bcrypt'
gem 'sidekiq'
gem 'responders'
gem 'puma'
gem 'pg'
gem "sentry-raven" # A gem for error monitoring ; After installing the ‘sentry-raven’ gem, you can go to your Sentry dashboard (through Heroku) and to see run time errors.
gem "paratrooper", "~> 3.0.2" # for setting up the Heroku staging environment
gem 'redis'

# AWS stuff...
# gem 'carrierwave-aws'
# gem 'fog-aws' #, require: 'fog/aws' # for AWS cloud storage
# gem 'carrierwave' # file upload solution
# gem 'carrierwave_direct' # This may be better: https://devcenter.heroku.com/articles/direct-to-s3-image-uploads-in-rails
gem 'mini_magick' # photo resizing

gem 'figaro' # creates the 'config/application.yml' file (in gitignore)
# gem 'sdoc', '~> 0.4.0', group: :doc # bundle exec rake doc:rails generates the API under doc/api.
gem 'simple_form'
gem "cocoon" # handle nested forms in rails
gem 'haml-rails'
gem 'mailgun-ruby', '~>1.0.3', require: 'mailgun'
gem 'omniauth'
gem 'omniauth-facebook'

# assets
gem "bower-rails"
gem 'handlebars_assets'
gem 'backbone-nested-attributes'
gem "js-routes" # to define path helpers in asset pipeline
gem 'sass-rails'
gem 'sass-images', github: 'codegram/sass-images'
# gem 'bourbon'
# gem 'compass-rails'
gem 'bootstrap_form'
gem 'coffee-rails'
gem 'autoprefixer-rails' # To work with bootstrap. It automatically adds the proper vendor prefixes to your CSS code when it is compiled.
gem 'jquery-rails'
gem 'uglifier', '>= 1.3.0' # compressor for JavaScript assets; coffeescript
gem 'gon'
gem 'jbuilder' #, '~> 2.0' # Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder

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

gem "foreman"
# gem 'ngannotate-rails'

group :production, :staging do
  gem "rails_12factor"
  gem "rails_stdout_logging"
  gem "rails_serve_static_assets"
  gem "rack-cors" # use with AWS Cloudfront CDN
end
