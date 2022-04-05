const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");
const TODOS_KEY = "toDos"

let toDos = [];

function savetoDo(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove(console.log(li.id));
}

function paintToDo(newToDo){
    const li = document.createElement("li");
    li.id = newToDo.id
    const span = document.createElement("span");
    span.innerText = newToDo.text;
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
    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
    }
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    savetoDo();
}

todoForm.addEventListener("submit", handleToDoSubmit)

const savedtoDos = localStorage.getItem(TODOS_KEY);

if(savedtoDos !== null) {
    const parsedtoDos = JSON.parse(savedtoDos);
    toDos.push(parsedtoDos);
    parsedtoDos.forEach(paintToDo);
}