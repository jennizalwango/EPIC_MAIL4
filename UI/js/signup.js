// import {SERVER_URL} from './global'
function CreateUser(){
  var firstname = document.getElementById("firstname").value;
  var lastname = document.getElementById("lastname").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var isAdmin = "true";


  if (firstname !="" && lastname !="" && email !="" && password !=""){
    const data = {"first_name":firstname, "last_name":lastname, "email":email, "password":password, 'isAdmin':isAdmin};
    
  
    var createaccount_url= SERVER_URL+"/api/v2/auth/signup";
    fetch(createaccount_url,{
      method:'POST',
      headers: {
        'Accept': 'application/json',
        'content-Type':'application/json'
      },
  
      cache: 'no-cache',
      body: JSON.stringify(data)
    }) 
    .then((res) => res.json())
    .then(result => {
      if(result.status === 201){
        // document.getElementById("messages").style.display ="block";
        // document.getElementById("messages").innerHTML = data["User created successfully"]
        alert("User created successfully");
        window.location.href = './index.html';
      }
      else{
        alert(JSON.stringify(result));
      }
      
     
    
})
  }}

