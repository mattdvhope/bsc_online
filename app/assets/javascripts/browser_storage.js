// Deal with browsers that don't allow session or local storage...

try {
  // Initialize sessionStorage key-value pairs//////////
  if (sessionStorage.getItem("fragment") === null) {
    sessionStorage.setItem("fragment", "");
  }
  if (sessionStorage.getItem("language") === null) {
    sessionStorage.setItem("language", "thai");
  }
  //////////////////////////////////////////////////////
}
catch (e) {
  swal({
    title: "Please turn off 'private' for this browser or use Chrome.",
    text: "It will run slowly in 'private.'",
    timer: 15000,
    showConfirmButton: true,
    animation: "slide-from-bottom"
  });
}

function sessionStorageAvailable(key) {
  return sessionStorage.getItem(key) !== null
}
