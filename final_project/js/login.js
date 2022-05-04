const loginForm = document.querySelector("#login-form");
const nameInput = document.querySelector("#login-form input:first-child");
const loginBtn = document.querySelector("#login-form input:last-child");
const namePaint = document.querySelector("#greeting");
const HIDDEN_CLASS = "hidden";

function loginSubmit (event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASS);
    const username = nameInput.value;
    localStorage.setItem("username", username);
    paintGreeting(username);
}
function paintGreeting(username){
    namePaint.innerText=`Hello ${username}`;
    namePaint.classList.remove(HIDDEN_CLASS);
}
function formValidate(){
    const username = nameInput.value;
    if (username == "") {
        alert("Name must be filled out");
        return false;
    }
}
const savedUsername = localStorage.getItem("username");

if (formValidate == false) {
    alert("Name must be filled out");
} else {
    paintGreeting(savedUsername);
}

if (savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASS);
    loginForm.addEventListener("submit", loginSubmit);
} else {
    paintGreeting(savedUsername);
}

