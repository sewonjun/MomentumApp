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

const savedUsername = localStorage.getItem("username");

if (savedUsername !== null){
    loginForm.classList.add(HIDDEN_CLASS);
    paintGreeting(savedUsername);
} else {
    loginForm.addEventListener("submit", loginSubmit );
}


