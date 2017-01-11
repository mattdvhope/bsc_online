function thai_language() {
  return sessionStorage.getItem('language') === "thai";
}

function choose_language(english, thai) {
  if (thai_language()) {
    return thai
  } else {
    return english;
  }
}
