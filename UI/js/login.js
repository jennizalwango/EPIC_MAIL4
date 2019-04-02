function loginUser(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    const data = {"email":email, "password":password};

    var login_url=SERVER_URL+"/api/v2/auth/login";
    fetch(login_url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        cache: 'no-cache',
        body: JSON.stringify(data)
    })
        .then((res) => res.json())
        .then(result => {
            if(result.status === 200){
                if(result.data[0]['user']['isadmin'] == "false"){
                    localStorage.setItem("auth-token",result.data[0]['token']);
                    window.location.href = 'users.html';
                }
                else{
                    localStorage.setItem("auth-token",result.data[0]['token']);
                    window.location.href = 'admin.html';
                }
            }
            else{
                var mssg = document.getElementById('message');
                mssg.style.display="block";
                mssg.innerHTML = "Missing or wrong email format or password is less than five characters"
                setInterval(function(){
                    mssg.style.display="none"
                    
                },5000);
            }
            
        })
        
}