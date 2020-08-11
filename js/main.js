//Global Counter for "To Do" IDs
let counter = 0;

// Make the template and the Edit section invisible by default
document.getElementsByClassName("todo-template")[0].style.display = 'none';
document.getElementsByClassName("todolist-container__edit-task")[0].style.display = 'none';


const addItem = () => {
    // Copy the Template
    let todoTemplate = document.querySelector('.todo-template');
    let newTask = todoTemplate.cloneNode(true);

    // Assign a new ID to the To Do
    counter++;
    let todoID = counter;
    newTask.id = "todo"+ todoID;
    todoTemplate.after(newTask);
    newTask.style.display = "flex";
    console.log(newTask);

    //Parse the Content of the Input into the To Do, then delete the Input
    let todoInput = document.getElementById("create-task__task-input").value;
    newTask.querySelectorAll(".todo-template__text")[0].textContent = todoInput;
    document.querySelector("#create-task__task-input").value = '';

    // Add Event Listeners for the Buttons
    newTask.querySelectorAll("button")[0].addEventListener("click", editItem.bind(null, todoID));
    newTask.querySelectorAll("button")[1].addEventListener("click", deleteItem.bind(null, todoID));
}

const editItem = (toDoID) => {
    document.getElementsByClassName("todolist-container__edit-task")[0].style.display = 'flex';
    document.querySelector("#todo" + toDoID).querySelector(".todo-template__text").textContent =
        document.getElementById("edit-task__task-edit").value;
    /*
    let inputField = document.getElementById("edit-task__task-edit").value;
    let taskContainer = document.querySelector("#todo" + toDoID);
    let textContainer = taskContainer.querySelector(".todo-template__text");
    textContainer.textContent = inputField; */
}

const deleteItem = (toDoID) => {
    document.querySelector("#todo" + toDoID).remove();
}

const submitChanges = () => {
    document.getElementsByClassName("todolist-container__edit-task")[0].style.display = 'none';
}

// "To Do" Button Event Listener
document.querySelector('#create-task__button-submit-input').addEventListener('click', addItem);

// "Submit Changes" Button Event Listener
document.querySelector('#edit-task__button-submit-edit').addEventListener('click', submitChanges);