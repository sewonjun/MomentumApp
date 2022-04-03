const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");
const TODOS_KEY = "toDos"

const toDos = [];

function savetoDo(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newToDo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newToDo;
    const button = document.createElement("button");
    button.innerText="❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}



function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = todoInput.value;
    todoInput.value = "";
    toDos.push(newToDo);
    paintToDo(newToDo);
    savetoDo();
}

todoForm.addEventListener("submit", handleToDoSubmit)

const savedtoDos = localStorage.getItem(TODOS_KEY);

if(savedtoDos !== null) {
    const parsedtoDos = JSON.parse(savedtoDos);
    toDos.push(parsedtoDos);
    parsedtoDos.forEach(paintToDo);
}