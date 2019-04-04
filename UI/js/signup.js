
function CreateUser(){
  let firstname = document.getElementById("firstname").value;
  let lastname = document.getElementById("lastname").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let isAdmin = "false";


  if (firstname !="" && lastname !="" && email !="" && password !=""){
    const data = {"first_name":firstname, "last_name":lastname, "email":email, "password":password, 'isAdmin':isAdmin};
    
  
    let createaccount_url= SERVER_URL+"/api/v2/auth/signup";
    fetch(createaccount_url,{
      method:'POST',
      mode:'cors',
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
        document.getElementById("messages").style.display ="block";
        // document.getElementById("messages").innerHTML = data["User created successfully"]
        alert("User created successfully");
        window.location.href = './index.html';
      }
      else{
        alert(JSON.stringify(result));
      } 
      
     
    
})
  }}
