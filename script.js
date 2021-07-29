const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')
const doneList = document.querySelector('.done-list')

// event listener
document.addEventListener('DOMContentLoaded', getTodo)
todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click',DeleteCheck)

// funtion

function addTodo(event){
    // stop web form submitting
    
    // create todo div
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')

    // create li
    if(todoInput.value === ''){
        alert("Please fill task");
    }else{
        const listTodo = document.createElement('li')
        listTodo.innerText = todoInput.value
        listTodo.classList.add('todo-item')
         // list => todo div
        todoDiv.appendChild(listTodo)
        // add todo => local storage
        saveLocalTodo(todoInput.value);
        event.preventDefault();
    }
    
    // done button
    const doneButton = document.createElement('button')
    doneButton.innerHTML = '<i class="fas fa-check"></i>'
    doneButton.classList.add ('done-button')
    doneButton.style.display = 'none'
    

    // done button => todo div
    todoDiv.appendChild(doneButton)

    // delete button
    const DeleteButton = document.createElement('button')
    DeleteButton.innerHTML = '<i class="fas fa-trash"></i>'
    DeleteButton.classList.add ('delete-button')
    DeleteButton.style.display = 'none'

    // button event listener
    todoDiv.addEventListener('mouseover', ()=>{
        DeleteButton.style.display = 'block'
        doneButton.style.display = 'block'
    })
    todoDiv.addEventListener('mouseout', ()=>{
        DeleteButton.style.display = 'none'
        doneButton.style.display = 'none'
    })
    // delete button => todo div
    todoDiv.appendChild(DeleteButton)

    // todo div => todo list div
    todoList.prepend(todoDiv)
     
    // clear todo input value
    todoInput.value = " ";
    
}

function DeleteCheck(event){
    const item = event.target

    if(item.classList[0] === 'delete-button'){
        const todo = item.parentElement

        removeLocalTodos(todo)
        todo.remove();

        
    }
    else if(item.classList[0] === 'done-button'){
        const doneitem = item.parentElement;

        doneitem.classList.replace('todo' ,'done')
        removeLocalTodos(doneitem)
        saveLocalDone(doneitem.firstElementChild)
        doneitem.remove();
        // doneitem => doneList
        doneList.prepend(doneitem.firstElementChild)
        
    }
}


function saveLocalTodo(todo){
    let todos;
    // if don't have locoal storage = create an array
    if(localStorage.getItem('todos') === null){
        todos = [ ];
    }
    // if have locoal storage = reload it
    else{
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    // push whatever to todo
    todos.push(todo)
    // set back to LocalStorage
    localStorage.setItem('todos', JSON.stringify(todos))
}

function saveLocalDone(doneitem){
    let dones;
    // if don't have locoal storage = create an array
    if(localStorage.getItem('dones') === null){
        dones = [ ];
    }
    // if have locoal storage = reload it
    else{
        dones = JSON.parse(localStorage.getItem('dones'))
    }
    dones.push(doneitem.innerText)
    localStorage.setItem('dones', JSON.stringify(dones))
}

function getTodo(){
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [ ];
    }
    else{
        todos = JSON.parse(localStorage.getItem('todos'))
    }

    let dones;
    if(localStorage.getItem('dones') === null){
        dones = [ ];
    }
    else{
        dones = JSON.parse(localStorage.getItem('dones'))
    }


    todos.forEach(function(todo){
        // create todo div
        const todoDiv = document.createElement('div')
        todoDiv.classList.add('todo')

        // create li
    
        const listTodo = document.createElement('li')
        listTodo.innerText = todo
        listTodo.classList.add('todo-item')
        // list => todo div
        todoDiv.appendChild(listTodo)
    
    
        // done button
        const doneButton = document.createElement('button')
        doneButton.innerHTML = '<i class="fas fa-check"></i>'
        doneButton.classList.add ('done-button')
        doneButton.style.display = 'none'
    

        // done button => todo div
        todoDiv.appendChild(doneButton)

        // delete button
        const DeleteButton = document.createElement('button')
        DeleteButton.innerHTML = '<i class="fas fa-trash"></i>'
        DeleteButton.classList.add ('delete-button')
        DeleteButton.style.display = 'none'
        todoDiv.addEventListener('mouseover', ()=>{
            DeleteButton.style.display = 'block'
            doneButton.style.display = 'block'
        })
        todoDiv.addEventListener('mouseout', ()=>{
            DeleteButton.style.display = 'none'
            doneButton.style.display = 'none'
        })
        // delete button => todo div
        todoDiv.appendChild(DeleteButton)

        // todo div => todo list div
        todoList.prepend(todoDiv)
    })
    dones.forEach(function (done){
        const doneDiv = document.createElement('div')
        doneDiv.classList.add('done')

        // create li
    
        const listDone = document.createElement('li')
        listDone.innerText = done
        listDone.classList.add('done-item')
        // list => todo div
        doneList.prepend(listDone)
    })
}


function removeLocalTodos(todo){
    let todos  = JSON.parse(localStorage.getItem('todos'))
    const itemIndex = todo.children[0].innerText
    todos.splice(todos.indexOf(itemIndex),1)
    localStorage.setItem('todos', JSON.stringify(todos))
}

