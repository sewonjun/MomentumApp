const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

function deleteToDo(event){
    console.log(event)
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
    todoInput.value = ""
    paintToDo(newToDo);
}

todoForm.addEventListener("submit", handleToDoSubmit)