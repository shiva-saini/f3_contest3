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


logoutButton.addEventListener('click',(event) =>{
     event.preventDefault();
     let currentUserToken = tokenDiv.innerText;
     console.log(currentUserToken);
     let userArray= JSON.parse(localStorage.getItem('users'));
     updatedArray = userArray.filter(obj => {
       return  obj.token !== currentUserToken
     })
     localStorage.setItem('users',JSON.stringify(updatedArray));
     localStorage.removeItem('token');
    location.href = '../'
})




function isLoggedIn() {
    let userToken = localStorage.getItem('token');
    if(userToken){
        return true;
    }
    return false; // Change this to 'true' if the user is logged in
}

function redirectToLogin() {
    window.location.href = "login.html";
}

function initProfilePage() {
    if (!isLoggedIn()) {
      redirectToLogin();
    }
}
document.addEventListener("DOMContentLoaded", initProfilePage);