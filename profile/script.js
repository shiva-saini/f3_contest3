let signupButton = document.getElementById('signupBtn');
let nameInput = document.getElementById('name');
let emailInput = document.getElementById('email')
let passwordInput = document.getElementById('password')
let errorDiv = document.getElementById('error');
let tokenDiv = document.getElementById('token')
let logoutButton = document.getElementById('logoutBtn')

let userArray= JSON.parse(localStorage.getItem('users'));
let userToken = localStorage.getItem('token');

userArray.forEach(obj => {
   if(obj.token == userToken){
      console.log(obj.token)
      nameInput.innerText = obj.name;
      emailInput.innerText = obj.email;
      passwordInput.innerText = obj.password;
      tokenDiv.innerText = obj.token;
   } 
});


