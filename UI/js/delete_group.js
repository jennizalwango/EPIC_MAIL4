token = localStorage.getItem('auth-token');
  if (token == null){
    window.location.href= './index.html'
  }

let getgroups_url= SERVER_URL+"/api/v2/groupnames";
fetch(getgroups_url,{
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
        document.getElementById('delete_user_form').innerHTML = '<p>There are no groups to send a message to. Please create one</p>';
    }
    else{
        var data ='';
        for(var i = 0 ; i<result.data.length; i++){
            data += "<option value='"+result.data[i]['id']+"'>"+result.data[i]['name']+"</option>"
        }
        document.getElementById('DeleteGroupId').innerHTML = data;
    }
  }
  else{
    alert(JSON.stringify(result));
  } 
        
})

.catch(function(err) {
    console.log('Fetch Error :-S', err);
  });


 // Delete message

function DeleteGroup(){
  var group_id = document.getElementById('DeleteGroupId').value;
  var id = parseInt(group_id)
  var confirm_delete = confirm("Are you sure you want to delete this group?");
  if(confirm_delete === true){
  token = localStorage.getItem('auth-token')
  let deletemessage_url = SERVER_URL+"/api/v2/groups/"+id
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
       alert("Group deleted successfully")
       window.location.href
          
       }
       else{
          alert(JSON.stringify(result))
       }
      
    })
  
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
  }}
  