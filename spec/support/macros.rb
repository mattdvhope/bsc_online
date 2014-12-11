module Macros

  def set_current_user(user=nil)
    session[:user_id] = (user || Fabricate(:user)).id # assigns ‘.id’ to either one
  end # The '||' allows the option of either having ‘alice’ or not having ‘alice’.

end