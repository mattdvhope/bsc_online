class AddCompletedToOffSiteLocation < ActiveRecord::Migration[5.0]
  def change
    add_column(:off_site_locations, :completed, :boolean)
  end
end
