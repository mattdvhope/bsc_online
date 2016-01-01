module CoderProvidable

  def generate_pin
    first_num  = ENV["pin_one"].to_i
    second_num = ENV["pin_two"].to_i

    return (SecureRandom.random_number(first_num) + second_num).to_s
  end

end