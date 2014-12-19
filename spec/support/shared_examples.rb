shared_examples "requires sign in" do
  it "redirects to the sign in page" do
    session[:user_id] = nil
    action # example of action... get :new
    expect(response).to redirect_to sign_in_path # If I ever want to change my sign_in_path I now only have to do so here--not throughout every place where I do "requires sign in".
  end
end