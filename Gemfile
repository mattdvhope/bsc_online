source 'https://rubygems.org'
ruby '2.2.0'

gem 'rails', '4.2.0'
gem 'bcrypt'
gem 'sidekiq'
gem 'responders'
gem 'puma'
gem 'pg'
gem "sentry-raven" # A gem for error monitoring ; After installing the ‘sentry-raven’ gem, you can go to your Sentry dashboard (through Heroku) and to see run time errors.
gem 'paratrooper' # for setting up the Heroku staging environment
gem 'carrierwave' # To work with app/uploaders/...
gem 'carrierwave-aws' # For Amazon S3; replaces 'fog'
gem 'figaro' # creates the 'config/application.yml' file (in gitignore)
gem 'draper' # For using decorators
# gem 'sdoc', '~> 0.4.0', group: :doc # bundle exec rake doc:rails generates the API under doc/api.
gem 'simple_form'
gem "cocoon" # handle nested forms
gem 'haml-rails'

# assets
gem 'backbone-on-rails'
gem 'handlebars_assets'
gem 'underscore-rails'

gem 'bower-rails'
# gem 'angular-rails-templates' # This takes html templates and compiles them into javascript files that insert our templates into Angular's $templateCache. This allows us to move our templates into the app/assets/javascripts folder while referencing them in our app using the same syntax. We'll be grouping our files in the javascripts folder by feature. Having templates and javascript in the same folder may seem weird if you're used to Rails' directory structure, but it will make our project easier to navigate. See #1 in this list of top AngularJS mistakes.  Keep in mind that because this gem is changing HTML files to to javascript files, you want to avoid having two assets of the same basename (for example, posts.html and posts.js) in the same folder as sprockets will end up overwriting one of the files.
gem 'bootstrap_form'
gem 'sass-rails', '~> 5.0.0'
gem 'coffee-rails'
gem 'autoprefixer-rails' # To work with bootstrap. It automatically adds the proper vendor prefixes to your CSS code when it is compiled.
gem 'jquery-rails'
gem 'uglifier', '>= 1.3.0' # compressor for JavaScript assets; coffeescript
gem 'gon'
gem 'jbuilder' #, '~> 2.0' # Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'mini_magick'

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
end
