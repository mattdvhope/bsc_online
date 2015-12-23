module CoderProvidable

  def generate_pin
    return SecureRandom.random_number(8999) + 1000
  end

end