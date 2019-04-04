function logOut(){
  token = localStorage.removeItem("auth-token");
  window.location.href='./index.html'
}