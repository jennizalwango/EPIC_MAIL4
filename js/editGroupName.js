token = localStorage.getItem('auth-token');
  if (token == null){
    window.location.href= './login.html'
  }

let editgroups_url= SERVER_URL+"/api/v2/groupnames";
fetch(editgroups_url,{
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
        document.getElementById('ChangeGroupName').innerHTML = '<p>There are no groups to rename. Please create one</p>';
    }
    else{
        var data ='';
        for(var i = 0 ; i<result.data.length; i++){
            data += "<option value='"+result.data[i]['id']+"'>"+result.data[i]['name']+"</option>"
        }
        document.getElementById('getgroupId').innerHTML = data;
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

function RenameGroup(){
  var new_group_name = document.getElementById('newgroupname').value;
  var group_id = document.getElementById('getgroupId').value;
  var id = parseInt(group_id)
  if(new_group_name !=""){
  var confirm_delete = confirm("Are you sure you want to rename this group?");
  if(confirm_delete === true){
  token = localStorage.getItem('auth-token')
  const data = {"name":new_group_name};
  let deletemessage_url = SERVER_URL+"/api/v2/groups/"+id+"/name"
  fetch(deletemessage_url, {
    method: 'PUT',
    mode:'cors',
    headers: {
       'Accept': 'application/json',
       'Content-type': 'application/json',
       "auth_token": token,
    },
    cache: 'no-cache',
    body: JSON.stringify(data)
    
  })
    .then((res) => res.json())
    .then(result => {
      
       if(result.status === 200){
       alert("Group renamed successfully")
       window.location.href = 'admin.html';
          
       }
       else{
          alert(JSON.stringify(result))
       }
      
    })
  
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
  }}else{
    alert("please enter new group name");
}
}
  