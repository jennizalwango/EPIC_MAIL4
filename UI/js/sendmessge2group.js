document.getElementById("Save").addEventListener('click', SendMessagetogroup);
  function SendMessagetogroup(){

  token = localStorage.getItem('auth-token');


    let groupname = document.getElementById('groupname').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;
    let status = 'sent'
    const data = {"groupname":groupname, "subject": subject, "message":message};
    
    let sendmssgtogroup_url=SERVER_URL+"/api/v2/groups/<group_id>/users";
    fetch(sendmssgtogroup_url, {
        method: 'POST',
        mode:'no-cors',
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
                    alert("Message sent successfully");
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