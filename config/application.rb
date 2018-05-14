require File.expand_path('../boot', __FILE__)

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module BscOnline
  class Application < Rails::Application
    config.active_record.pluralize_table_names = true
    # config.active_record.raise_in_transactional_callbacks = true
    config.autoload_paths += %W(#{config.root}/lib) # To enable the module in lib/assessment_providable.rb to be available to the models

    # This middleware will compress (using gzip, deflate,  or another Accept-Encoding value) every response that leaves your application.
    config.middleware.use Rack::Deflater

    config.action_dispatch.default_headers.merge!({
      'Access-Control-Allow-Origin' => 'https://vibrant-mccarthy-58efac.netlify.com',
      'Access-Control-Request-Method' => '*'
    })

    # Setup for CORS
    config.middleware.insert_before 0, Rack::Cors do
      allow do
        origins 'localhost:8000', '127.0.0.1:8000'
        resource '*',
          :headers => :any,
          :methods => [:get, :post, :put, :patch, :options]
      end

      # MORE THAN ONE origin possible
      allow do
        origins 'https://vibrant-mccarthy-58efac.netlify.com' # DON'T ADD FINAL SLASH!!!  DON'T FORGET https ..the 's'!!
        resource '*',
          :headers => :any,
          :methods => [:get, :post, :put, :patch, :options]
        # resource '/public/*', :headers => :any, :methods => :get
      end
    end

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    # Set Time.zone default to the specified zone and make Active Record auto-convert to this zone.
    # Run "rake -D time" for a list of tasks for finding time zone names. Default is UTC.
    config.time_zone = 'Bangkok'

    # The default locale is :en and all translations from config/locales/*.rb,yml are auto loaded.
    # config.i18n.load_path += Dir[Rails.root.join('my', 'locales', '*.{rb,yml}').to_s]
    # config.i18n.default_locale = :de

    # for Bower...
    config.assets.paths << Rails.root.join("vendor","assets","bower_components")
    config.assets.paths << Rails.root.join("vendor","assets","bower_components","bootstrap-sass-official","assets","fonts")

    config.assets.precompile << %r(.*.(?:eot|svg|ttf|woff)$)
    config.assets.precompile.push(Proc.new do |path|
      File.extname(path).in? [
        '.html', '.erb', '.haml',                 # Templates
        '.png',  '.gif', '.jpg', '.jpeg', '.svg', # Images
        '.eot',  '.otf', '.svc', '.woff', '.ttf', # Fonts
      ]
    end)
  end
end
