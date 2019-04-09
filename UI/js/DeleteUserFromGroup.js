token = localStorage.getItem('auth-token');
  if (token == null){
    window.location.href= './login.html'
  }

let getdeletegroup_url= SERVER_URL+"/api/v2/groupnames";
fetch(getdeletegroup_url,{
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
        document.getElementById('delete_usergroup_form').innerHTML = '<p>There are no groups to send a message to. Please create one</p>';
    }
    else{
        var data ='';
        for(var i = 0 ; i<result.data.length; i++){
            data += "<option value='"+result.data[i]['id']+"'>"+result.data[i]['name']+"</option>"
        }
        document.getElementById('DeleteUserFromGroupID').innerHTML = data;
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
let delete_users_url= SERVER_URL+"/api/v2/users";
fetch(delete_users_url,{
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
        document.getElementById('delete_usergroup_form').innerHTML = '<p>There are no users to add to a group.</p>';
    }
    else{
        var data ='';
        for(var i = 0 ; i<result.data.length; i++){
            data += "<option value='"+result.data[i]['id']+"'>"+result.data[i]['name']+"</option>"
        }
        document.getElementById('DeleteUserId').innerHTML = data;
    }
  }
  else{
    alert(JSON.stringify(result));
  } 
        
})

.catch(function(err) {
    console.log('Fetch Error :-S', err);
  });


  function DeleteUserFromGroup_1(){
    var group_id = document.getElementById('DeleteUserFromGroupID').value;
    var user_id = document.getElementById('DeleteUserId').value;
    var id = parseInt(group_id)
    var confirm_delete = confirm("Are you sure you want to delete this user from this group?");
    if(confirm_delete === true){
    token = localStorage.getItem('auth-token')
    let deletemessage_url = SERVER_URL+"/api/v2/groups/"+group_id+"/users/"+user_id
    fetch(deletemessage_url, {
      method: 'DELETE',
      mode:'cors',
      headers: {
         'Accept': 'application/json',
         'Content-type': 'application/json',
         "auth_token": token,
      },
      cache: 'no-cache'
      
    })
      .then((res) => res.json())
      .then(result => {
        
         if(result.status === 200){
         alert(result.data[0]['message'])
            
         }
         else{
            alert(JSON.stringify(result))
         }
        
      })
    
      .catch(function(err) {
        console.log('Fetch Error :-S', err);
      });
    }}
    