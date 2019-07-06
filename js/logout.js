function logOut(){
  token = localStorage.removeItem("auth-token");
  window.location.href='./login.html'
}