class CreateOffSiteLocation < ActiveRecord::Migration[5.0]
  def change
    create_table :off_site_locations do |t|
      t.string :location_english
      t.string :location_thai
    end
  end
end
