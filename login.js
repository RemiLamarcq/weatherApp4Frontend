// Insert your code here

document.querySelector('#register').addEventListener('click', function(){
    const newUser = {
    
        name : document.querySelector('#registerName').value,
        email : document.querySelector('#registerEmail').value,
        password : document.querySelector('#registerPassword').value,
    };
  

    fetch('https://weather-app4-back/users/signup', {
    method : 'POST',
    headers: { 'Content-Type' : 'application/json'},
    body: JSON.stringify(newUser)

})
    .then(response => response.json())
    .then(data => {
        if(data.result){
            console.log('ok')
            window.location.assign('index.html')
        }

    })
})

document.querySelector('#connection').addEventListener('click', function(){
    const user = {
        email : document.querySelector('#connectionEmail').value, 
        password : document.querySelector('#connectionPassword').value, 
    };

    console.log(user)

    fetch('https://weather-app4-back/users/signin', {
        method : 'POST',
        headers: { 'Content-Type' : 'application/json'},
        body: JSON.stringify(user)
    
    })
        .then(response => response.json())
        .then(data => {
            if(data.result){
                console.log('ok')
                window.location.assign('index.html')
            }
    
        })

});




