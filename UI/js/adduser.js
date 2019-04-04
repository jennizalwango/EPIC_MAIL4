token = localStorage.getItem('auth-token');
  if (token == null){
    window.location.href= './index.html'
  }
function AddUser(){

  let groupId = document.getElementById("groupId").value;
  let userRole = document.getElementById("userRole").value;
  let userId = document.getElementById("userId").value 


  if (groupId !="" && userId !="" && userRole !=""){
    const data = {"groupId":groupId, "userRole":userRole, "userId":userId};
    
    let adduser_url= SERVER_URL+"/api/v2/groups/<group_id>/users";
    fetch(adduser_url,{
      method:'POST',
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
        alert("User added to a group  successfully");
        window.location.href = './admin.html';
      }
      else{
        alert(JSON.stringify(result));
      } 
     
})
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
  }
}