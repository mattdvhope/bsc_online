module ApplicationCable
  class Connection < ActionCable::Connection::Base
  # A connection instance gets instantiated from this class
  # every time a WebSocket request is accepted by the server. 

    identified_by :current_user # Anything marked as an
                                # identifier will automatically
                                # create a delegate by the same
                                # name on any channel instances
                                # created off the connection.

  end
end
