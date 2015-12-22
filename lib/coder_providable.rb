module CoderProvidable

  def generate_pin
    return SecureRandom.random_number(8999) + 1000
  end

  def show_user_name
    return self.first_name
  end

end