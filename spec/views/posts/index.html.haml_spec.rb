require 'rails_helper'

RSpec.describe "posts/index", :type => :view do
  before(:each) do
    assign(:posts, [
      Post.create!(
        :title => "Title",
        :intro => "MyText",
        :body => "MyText"
      ),
      Post.create!(
        :title => "Title",
        :intro => "MyText",
        :body => "MyText"
      )
    ])
  end

  it "renders a list of posts" do
    render
    assert_select "tr>td", :text => "Title".to_s, :count => 2
    assert_select "tr>td", :text => "MyText".to_s, :count => 2
    assert_select "tr>td", :text => "MyText".to_s, :count => 2
  end
end
