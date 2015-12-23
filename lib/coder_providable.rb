module CoderProvidable

  def generate_pin
    return SecureRandom.random_number(899999) + 100000
  end

end