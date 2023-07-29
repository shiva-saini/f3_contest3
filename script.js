let signupButton = document.getElementById('signupBtn');
let nameInput = document.getElementById('name');
let emailInput = document.getElementById('email')
let passwordInput = document.getElementById('password')
let confirm_passowrd_Input = document.getElementById('confirm-password');
let errorDiv = document.getElementById('error');
signupButton.addEventListener('click', (event) => {
     event.preventDefault();
     let name = nameInput.value;
     let email = emailInput.value;
     let password = passwordInput.value;
     let confirm_password = confirm_passowrd_Input.value;

     if(name.trim() === '' || email.trim() === '' || password.trim() === '' || confirm_password.trim() === ''){
        errorDiv.innerText = "Error : All fields are mendatory!";
        errorDiv.style.display = 'flex'
        return;
     }else{
        let userArray = JSON.parse(localStorage.getItem('users'));
        if(userArray){
            if(checkUserAlreadyExists(email)){
                errorDiv.innerText = 'Account already exists! Please login';
                errorDiv.style.display = 'flex'
                return;
            }else{
                let token = generateToken(16);
                let userObj = {
                    name:name,
                    email:email,
                    password:password,
                    token:token
                }
                localStorage.setItem('token',token)
                userArray.push(userObj);
                localStorage.setItem('users',JSON.stringify(userArray));
                location.href = './profile';
            }
           
        }else{
            userArray = [];
            let token = generateToken(16);
            let userObj = {
                name:name,
                email:email,
                password:password,
                token:token
            }
            localStorage.setItem('token',token)
            userArray.push(userObj);
            localStorage.setItem('users',JSON.stringify(userArray));
            location.href = './profile';
        }
     }
})


function checkUserAlreadyExists(email){
    let userArray = JSON.parse(localStorage.getItem('users'));
    if(userArray){
        userArray.forEach(user => {
            if(user.email === email){
                return true;
            }
        })
    }
    return false;
}


function generateToken(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+';
    let token = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      token += characters.charAt(randomIndex);
    }
  
    return token;
  }
