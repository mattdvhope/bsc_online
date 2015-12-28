class AddApprovedToAdminApplications < ActiveRecord::Migration
  def change
    add_column :admin_applications, :approved, :boolean, :default => false
  end
end
