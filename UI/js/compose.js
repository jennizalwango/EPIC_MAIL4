token = localStorage.getItem('auth-token');
  if (token == null){
    window.location.href= './login.html'
  }
document.getElementById("Save").addEventListener('click', createmessage);
  function createmessage(){




    let receiver_email = document.getElementById('receiver_email').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;
    let status = 'sent'
    const data = {"receiverEmail":receiver_email, "subject": subject, "message":message};
    
    let createmssg_url=SERVER_URL+"/api/v2/messages";
    fetch(createmssg_url, {
        method: 'POST',
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

        .catch(function(err) {
            console.log('Fetch Error :-S', err);
          });
          
  }
