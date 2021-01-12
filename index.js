const todoInput = document.querySelector('.todoinput');
const todoButton = document.querySelector('.todobutton');
const todoList = document.querySelector('.todolist');
const filterOption = document.querySelector('.filter_todo');
todoButton.addEventListener("click", addTodo)
todoList.addEventListener("click", deleteitem)
filterOption.addEventListener("click", filterTodo)

function addTodo(event) {
    event.preventDefault();
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo_item');
    todoDiv.appendChild(newTodo);
    if (todoInput.value === "") {
        return null
    }

    const completedButton = document.createElement('button');
    completedButton.innerHTML = 'Mark as done';
    completedButton.classList.add('complete_btn')
    todoDiv.appendChild(completedButton);
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'delete';
    deleteButton.classList.add('delete_btn')
    todoDiv.appendChild(deleteButton);
    todoList.appendChild(todoDiv);
    todoInput.value = ""
}

function deleteitem(e) {
    const item = e.target;
    if (item.classList[0] === "delete_btn") {
        const todo = item.parentElement;
        todo.classList.add("fall")
        todo.addEventListener('transitionend', function () {
            todo.remove()
        })
    }
    if (item.classList[0] === "complete_btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completedItem")
    }
}