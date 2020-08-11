document.querySelector('#create-task__button-submit-input').addEventListener('click', addItem);

let counter = 0;

function addItem(){

    // Copy the Template
    let todoTemplate = document.querySelector('.todo-template');
    let newTask = todoTemplate.cloneNode(true);

    // Assign a new ID to the To Do
    counter++;
    let todoID = counter;
    newTask.id = "todo"+ todoID;
    todoTemplate.after(newTask);

    //Parse the Content of the Input into the To Do, then delete the Input
    let todoInput = document.getElementById("create-task__task-input").value;
    newTask.querySelectorAll(".todo-template__text")[0].textContent = todoInput;
    document.querySelector("#create-task__task-input").value = '';

    // Add Event Listeners for the Buttons
    newTask.querySelectorAll(":scope > button")[0].addEventListener("click", editItem.bind(null, todoID));
    newTask.querySelectorAll(":scope > button")[1].addEventListener("click", deleteItem.bind(null, todoID));
}

function editItem(toDoID){
    console.log(`edit ${toDoID}`);
}

function deleteItem(toDoID){
    console.log(`delete ${toDoID}`);

}
