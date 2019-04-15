token = localStorage.getItem('auth-token');
  if (token == null){
    window.location.href= './login.html'
  }

let getmessage_url= SERVER_URL+"/api/v2/groupnames";
fetch(getmessage_url,{
  method:'GET',
  headers: {
    'auth_token': token,
    'Accept': 'application/json',
    'content-Type':'application/json'
  },

  cache: 'no-cache'

}) 
.then((res) => res.json())
.then(result => {
  if(result.status === 200){
 
    if(result.data == 'No group found'){
        document.getElementById('add_user_form').innerHTML = '<p>There are no groups to send a message to. Please create one</p>';
    }
    else{
        var data ='';
        for(var i = 0 ; i<result.data.length; i++){
            data += "<option value='"+result.data[i]['id']+"'>"+result.data[i]['name']+"</option>"
        }
        document.getElementById('groupId').innerHTML = data;
    }
  }
  else{
    alert(JSON.stringify(result));
  } 
        
})

.catch(function(err) {
    console.log('Fetch Error :-S', err);
  });


// get all users
let users_url= SERVER_URL+"/api/v2/users";
fetch(users_url,{
  method:'GET',
  headers: {
    'auth_token': token,
    'Accept': 'application/json',
    'content-Type':'application/json'
  },

  cache: 'no-cache'

}) 
.then((res) => res.json())
.then(result => {
  if(result.status === 200){
 
    if(result.data == 'No group found'){
        document.getElementById('add_user_form').innerHTML = '<p>There are no users to add to a group.</p>';
    }
    else{
        var data ='';
        for(var i = 0 ; i<result.data.length; i++){
            data += "<option value='"+result.data[i]['id']+"'>"+result.data[i]['name']+"</option>"
        }
        document.getElementById('userId').innerHTML = data;
    }
  }
  else{
    alert(JSON.stringify(result));
  } 
        
})

.catch(function(err) {
    console.log('Fetch Error :-S', err);
  });


function AddUser(){

  let groupId = document.getElementById("groupId").value;
  let userRole = document.getElementById("userRole").value;
  let userId = document.getElementById("userId").value 
  let id = parseInt(groupId);

  if (groupId !="" && userId !="" && userRole !=""){
    const data = {"userId":parseInt(groupId), "userRole":userRole};

    
    let adduser_url= SERVER_URL+"/api/v2/groups/"+id+"/users";
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
        document.getElementById("AddUsers").reset();
        var mssg = document.getElementById('success-message');
        mssg.style.display="block";
        mssg.innerHTML = "User added to a group  successfully";
        setInterval(function(){
            mssg.style.display="none"
            
},5000);
      }
      else{
        document.getElementById("messages").style.display ="block";
        document.getElementById("AddUsers").reset();
        var mssg = document.getElementById('error-message');
        mssg.style.display="block";
        mssg.innerHTML = ""+JSON.stringify(result);
        setInterval(function(){
            mssg.style.display="none"
            
},5000);
    
      } 
     
})
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
  }
}