const todoInput = document.querySelector("#todoinput");
const addBtn = document.querySelector(".add");
const todoList = document.querySelector(".todolist");
const filter = document.querySelector(".filter")

const reAsk = document.querySelector(".assure");
const deleteIt = document.querySelector('.yes')
const leaveIt = document.querySelector('.no');
const overLay = document.querySelector('.overlay');

addBtn.addEventListener("click", toCheck);
todoList.addEventListener("click", markTodo);
todoList.addEventListener("click", trashTodo);
filter.addEventListener("click", filterTodo);
 
document.addEventListener("DOMContentLoaded", getLocal);

console.log(localStorage.todos[0])

// declare functions
function toCheck(event) {
      event.preventDefault();
     if(todoInput.value === "") {
         alert("Enter Todo");
     }else {
         addTodo();
     }
    
}

//add todo
function addTodo(event) {    
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const todoItem = document.createElement("li");
    todoItem.innerText = todoInput.value;
    todoItem.classList.add("todoitem");
    todoDiv.appendChild(todoItem);

    saveLocal(todoInput.value)

    const comBtn = document.createElement("button");
    comBtn.innerText = "Done";
    comBtn.classList.add("done");
    todoDiv.appendChild(comBtn);

    const trashBtn = document.createElement("button");
    trashBtn.innerText = "Delete";
    trashBtn.classList.add("trash");
    todoDiv.appendChild(trashBtn);

    todoList.appendChild(todoDiv);
    todoInput.value = "";
}

//mark todo complete
function markTodo(e) {
    const item = e.target;

    if(item.classList[0] === "done") {
        const todo = item.parentElement;
        todo.classList.toggle("complete");
    }

};


//delete todo
function trashTodo(e) {
    const item = e.target;

    if(item.classList[0] === "trash") {
        reAsk.style.display =  'flex';

        deleteIt.addEventListener('click', function(){
            const todo = item.parentElement;
            todo.remove();
            reAsk.style.display =  'none';
            
        });
        leaveIt.addEventListener('click', function(){
            reAsk.style.display =  'none';
        });
        overLay.addEventListener('click', function(){
            reAsk.style.display =  'none';
        });
    } 

}

//filter todo
function filterTodo(e) {
    const filters = todoList.childNodes;

    console.log(todoList.childNodes)
    filters.forEach(filt => {
        switch(e.target.value) {
            case "all": 
            filt.style.display = "flex"
                break;
            case "completed": 
                if( filt.classList.contains('complete')) {
                    filt.style.display = "flex"
                }else {
                    filt.style.display = "none"
                }
                break;
            case "incompleted": 
                if (!filt.classList.contains("complete")) {
                    filt.style.display = "flex"
                }else {
                    filt.style.display = "none"
                }
                break;
        }
    })
}
// save to local storage  

function saveLocal(todo) {
    let todos;
    if (localStorage.getItem("todos") === null ) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}
// get todos 

function getLocal() {
    let todos;
    if (localStorage.getItem("todos") === null ) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.forEach(todo => {
        const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const todoItem = document.createElement("li");
    todoItem.innerText = todo;
    todoItem.classList.add("todoitem");
    todoDiv.appendChild(todoItem);

    const comBtn = document.createElement("button");
    comBtn.innerText = "Done";
    comBtn.classList.add("done");
    todoDiv.appendChild(comBtn);

    const trashBtn = document.createElement("button");
    trashBtn.innerText = "Delete";
    trashBtn.classList.add("trash");
    todoDiv.appendChild(trashBtn);

    todoList.appendChild(todoDiv);
    })

}
function deletemmLocal() {
    let todos;
    if (localStorage.getItem("todos") === null ) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
}