shared_examples "requires log in" do
  it "redirects to the root path" do
    session[:user_id] = nil
    action
    expect(response).to redirect_to root_path # If I ever want to change my root_path I now only have to do so here--not throughout every place where I do "requires sign in".
  end
end

shared_examples "requires overseer" do
  it "flashes that the user is not authorized to do that" do
    session[:user_id] = Fabricate(:user).id
    action
    expect(flash[:danger]).to eq "You are not authorized to do that."
  end
end
