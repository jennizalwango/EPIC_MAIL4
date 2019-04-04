token = localStorage.getItem('auth-token');
let getmessage_url= SERVER_URL+"/api/v2/groupnames";
fetch(getmessage_url,{
  method:'GET',
  mode:'cors',
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
   alert(JSON.stringify(result));
    if(result.data == 'No group found'){
        document.getElementById('compose_form').innerHTML = '<p>There are no groups to send a message to. Please create one</p>';
    }
    else{
        var data ='';
        for(var i = 0 ; i<result.data.length; i++){
            data += "<option value='"+result.data[i]['group_id']+"'>"+result.data[i]['groupname']+"</option>"
        }
        document.getElementById('Group name').innerHTML = data;
    }
  }
  else{
    alert(JSON.stringify(result));
  } 
        
})

// send message to a group

document.getElementById("Save").addEventListener('click', createmessage);
  function createmessage(){

  token = localStorage.getItem('auth-token');


    let group = document.getElementById('Group name').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;
    let id = parseInt(group)
    let status = 'sent'
    const data = {"subject": subject, "message":message};
    
    let createmssg_url=SERVER_URL+"/api/v2/groups/"+id+"/messages";
    fetch(createmssg_url, {
        method: 'POST',
        mode:'cors',
        headers: {
            'auth-token': token,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        cache: 'no-cache',
        body: JSON.stringify(data)
    })
        .then((res) => res.json())
        .then(result => {
            console.log(result, '---result');
            if(result.status === 200){
                if(result.data[0]['status'] == "sent"){
                    document.getElementById("Save").style.display ="block";
                    alert("Message created successfully");
                    window.location.href = './users.html';
                }
                else{
                    alert(result);
                }
            }
            else{
                let mssg = document.getElementById('messages');
                mssg.style.display="block";
                mssg.innerHTML = "Missing feilds "
                setInterval(function(){
                    mssg.style.display="none"
                    
                },5000);
            }
            
        })
          
  }