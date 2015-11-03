console.log(gon.user);

if (gon.user) {
  swal({
    title: "สวัสดีครับ -- Thank you for visiting as our guest!",
    text: "You are logged in as a temporary guest. Please be aware that any work you do while logged in as a 'temporary guest' will not be recorded after you have logged out. But if you decide to Join BSC English Online (while still logged in this time!), all your work from this time will be retained.",
    timer: 19000,
    showConfirmButton: true,
    animation: "slide-from-bottom"
  });
}







