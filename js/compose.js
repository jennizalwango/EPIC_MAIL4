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
            // console.log(result, '---result');
            if(result.status === 200){
                if(result.data[0]['status'] == "sent"){
                    document.getElementById("theformId").reset();
                    var mssg = document.getElementById('success-message');
                    mssg.style.display="block";
                    mssg.innerHTML = "You have successfully sent a message";
                    setInterval(function(){
                        mssg.style.display="none"
                        
        },5000);
                }
                else{
                    alert(result);
                }
            }
            else{
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
