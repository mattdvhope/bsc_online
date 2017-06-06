class AddOffSiteLocationIdToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :off_site_location_id, :integer
  end
end
