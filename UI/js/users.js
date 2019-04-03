
token = localStorage.getItem('auth-token');
let getmessage_url= SERVER_URL+"/api/v2/messages";
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
    data = "<table><caption>Inbox Messages</caption><th>Sender</th><th>Subject</th><th>Message</th><th>Date</th><th>Action</th>";
    if(result.data == "No receieved messages found"){
        data += "<tr><td colspan='5'>No receieved messages found</td></tr></table>";
    }else{
      for(var i=0; i<result.data.length;i++){

        data += "<tr><td>"+result.data[i]['receiver_mail']+"</td><td>"+result.data[i]['subject']+"</td><td>"+result.data[i]['message']+"</td><td>"+result.data[i]['createdOn']+"</td><td><button id ='"+result.data[i]['id']+"' onclick='readMessage("+result.data[i]['id']+"','"+result.data[i]['message']+"','"+result.data[i]['subject']+")'>Read</button>"+
        "<button onclick='mydeleteFunction("+result.data[i]['id']+")'>Delete</button> </td></tr>";
      }
    }
    document.getElementById('inbox_message').innerHTML = data+"</table>"
  }
  else{
    alert(JSON.stringify(result));
  } 
        
})


// Delete message
function mydeleteFunction(message_id){
var confirm_delete = confirm("Are you sure you want to delete this message!");
if(confirm_delete === true){
token = localStorage.getItem('auth-token')
let deletemessage_url = SERVER_URL+`/api/v2/messages/${message_id}`
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