class AddTimestampToOffSiteLocation < ActiveRecord::Migration[5.0]
  def change
    add_column(:off_site_locations, :created_at, :datetime)
    add_column(:off_site_locations, :updated_at, :datetime)
  end
end
