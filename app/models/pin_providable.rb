module PinProvidable # This is made available to the models by altering 'config/application.rb', config.autoload_paths << "#{Rails.root}/lib"
  extend ActiveSupport::Concern # Rails’ way of organizing these types of cross-cutting concerns in our application.

  included do # Used in user.rb.  In 'config/application.rb', be sure to add...  config.autoload_paths << "#{Rails.root}/lib"  ...to have access to the lib directory.

    def generate_pin
      num = SecureRandom.random_number(100) * SecureRandom.random_number(100)
      if num < 1000
        num = num + SecureRandom.random_number(8000) + 1000
      end
      if num == 10000
        num = num - (1 + SecureRandom.random_number(1000))
      end
      return num.to_s
    end

  end

end