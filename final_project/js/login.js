const loginForm = document.querySelector("#login-form");
const nameInput = document.querySelector("#login-form input:first-child");
const loginBtn = document.querySelector("#login-form input:last-child");
const namePaint = document.querySelector("#greeting");
const HIDDEN_CLASS = "hidden";

function loginSubmit (event){
    event.preventDefault();
    const username = nameInput.value;
    if(username == ""){
        alert("Name must be filled out");
        return false;
        // return flase를 지우면 무슨 일이 일어나는가?? 그럼 그냥 username이 빈칸으로 제출된다
        // 그렇다면 return false는 무엇을 말하는가? submit false를 말한다. 제출 못하게 하는 장치라는 뜻~~
    }
    loginForm.classList.add(HIDDEN_CLASS);
    localStorage.setItem("username", username);
    paintGreeting(username);
}
function paintGreeting(username){
    namePaint.innerText=`Hello ${username}`;
    namePaint.classList.remove(HIDDEN_CLASS);
}

const savedUsername = localStorage.getItem("username");

if (savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASS);
    loginForm.addEventListener("submit", loginSubmit);
} else {
    loginForm.classList.add(HIDDEN_CLASS);
    paintGreeting(savedUsername);
}

