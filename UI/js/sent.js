
token = localStorage.getItem('auth-token');
let getmessage_url= SERVER_URL+"/api/v2/messages/sent";
fetch(getmessage_url,{
  method:'GET',
  mode:'no-cors',
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
   
    data = "<table><caption>Sent Messages</caption><th>Receiver</th><th>Subject</th><th>Message</th><th>Date</th><th>Action</th>";
    if(result.data == "No sent messages found"){
        data += "<tr><td colspan='5'>No sent messages found</td></tr></table>";
    }else{
      for(var i=0; i<result.data.length;i++){

        data += "<tr><td>"+result.data[i]['receiver_mail']+"</td><td>"+result.data[i]['subject']+"</td><td>"+result.data[i]['message']+"</td><td>"+result.data[i]['createdOn']+"</td><td><button id ='message'>Read</button>"+
        "<button onclick='mydeleteFunction("+result.data[i]['id']+")'>Delete</button> </td></tr>";
      }
    }
    document.getElementById('sent_message').innerHTML = data+"</table>"
  }
  else{
    alert(JSON.stringify(result));
  } 
        
})