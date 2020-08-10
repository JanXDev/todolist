document.querySelector('#create-task__button-submit-input').addEventListener('click', addItem);

let counter = 0;

function addItem(){
    // Copying the Template
    let todoTemplate = document.querySelector('.todo-template');
    let newTask = todoTemplate.cloneNode(true);

    // Assigning a new ID to the To Do
    counter++;
    newTask.id = "todo"+ counter;
    todoTemplate.after(newTask);

    //Parsing the Content of the Input into the To Do, then delete the Input
    let todoInput = document.getElementById("create-task__task-input").value;
    newTask.querySelectorAll(":scope > .todo-template__text")[0].textContent = todoInput;
    document.getElementById("create-task__task-input").value = '';
}


function editItem(){


}



function deleteItem(){


}
