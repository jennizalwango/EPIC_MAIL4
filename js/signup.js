
function CreateUser(){
  let firstname = document.getElementById("firstname").value;
  let lastname = document.getElementById("lastname").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let isAdmin = "true";


  if (firstname !="" && lastname !="" && email !="" && password !=""){
    const data = {"first_name":firstname, "last_name":lastname, "email":email, "password":password, 'isAdmin':isAdmin};
    
  
    let createaccount_url= SERVER_URL+"/api/v2/auth/signup";
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
        document.getElementById("formId").reset();
        var mssg = document.getElementById('success-message');
        mssg.style.display="block";
        mssg.innerHTML = "You have successfully signed up";
        setInterval(function(){
            mssg.style.display="none"
            
        },5000);
      }
      else{
         
          var mssg = document.getElementById('error-message');
          mssg.style.display="block";
          mssg.innerHTML = ""+JSON.stringify(result);
          setInterval(function(){
              mssg.style.display="none" 
          },5000);
       
      }} 
      
     
    
)
  }}