# Be sure to restart your server when you modify this file. Action Cable runs in a loop that does not support auto reloading.
class VolunteerRestorationChannel < ApplicationCable::Channel
  def subscribed
    # stream_from 'volunteer_restoration'
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
