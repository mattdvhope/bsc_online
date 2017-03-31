module ApplicationCable
  class Connection < ActionCable::Connection::Base
  # A connection instance gets instantiated from this class
  # every time a WebSocket request is accepted by the server. 

    # identified_by :current_user # Anything marked as an
    #                             # identifier will automatically
    #                             # create a delegate by the same
    #                             # name on any channel instances
    #                             # created off the connection.
    # # This is perfect for us, since it will allow us to use the
    # # method, 'current_user', in our Messages Channel.

    # def connect
    # # The 'connect' method will be called for us when the
    # # consumer sends the WebSocket request, triggering a
    # # new instance of Connection to be born. Here we'll
    # # retrieve and set the current user, plucking the
    # # user ID from the 'cookies.permanent', which we'd set
    # # in 'SessionsController::create'
    #   self.current_user = find_verified_user
    # end

    # protected
    #   def find_verified_user
    #     if current_user = User.find_by(id: cookies.permanent.signed[:user_id])
    #       current_user
    #     else
    #       reject_unauthorized_connection
    #     end
    #   end

  end
end
