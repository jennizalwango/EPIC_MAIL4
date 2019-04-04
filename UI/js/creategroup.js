
function CreateGroup(){

  token = localStorage.getItem('auth-token');

  let groupname = document.getElementById("groupname").value;
  let grouprole = document.getElementById("grouprole").value;

  if (groupname !="" && groupname !=""){
    const data = {"name":groupname, "role":grouprole}; 
  
    let creategroup_url= SERVER_URL+"/api/v2/groups";
    fetch(creategroup_url,{
      method:'POST',
      mode:'no cors',
      headers: {
        'auth-token': token,
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
        alert("Group created successfully");
        window.location.href = './admin.html';
      }
      else{
        alert(JSON.stringify(result));
      } 
         
})
  }}


  // delete a group
  function mydeleteFunction(group_id){
    var confirm_delete = confirm("Are you sure you want to delete this message!");
    if(confirm_delete === true){
    token = localStorage.getItem('auth-token')
    let deletemessage_url = SERVER_URL+`/api/v2/groups/${group_id}`
    fetch(deletemessage_url, {
      method: 'DELETE',
      headers: {
         'Accept': 'application/json',
         'Content-type': 'application/json',
         "auth_token": token,
      },
      cache: 'no-cache'
      
    })
      .then((res) => res.json())
      .then(result => {
         location.reload()
         if(result.status === 200){
          
            var msg = document.getElementById('mess');
            msg.style.display="block";
    
            msg.innerHTML = "Successfully deleted the message"
            setInterval(function(){
               msg.style.display="none"
                
            },5000);
            
         }
         else{
            alert(JSON.stringify(result.error))
         }
        
      })
    }}

