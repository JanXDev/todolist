// Global Counter for "To Do" IDs
let counter = 0;
// Easter Egg Counter
let easterEgg = 0;
// Make the template and the Edit section invisible by default
document.getElementsByClassName("todo-template")[0].style.display = "none";
// Bottom section can be deleted. Editing now works in the task itself.
/*document.getElementsByClassName(
  "todolist-container__edit-task"
)[0].style.display = "none";*/

const addItem = () => {
  // Copy the Template
  let todoInput = document.getElementById("create-task__task-input").value;
  if (todoInput != "") {
    let todoTemplate = document.querySelector(".todo-template");
    let newTask = todoTemplate.cloneNode(true);

    // Assign a new ID to the To Do
    counter++;
    let todoID = counter;
    newTask.id = "todo" + todoID;
    todoTemplate.after(newTask);
    newTask.style.display = "flex";
    console.log(newTask);

    //Parse the Content of the Input into the To Do, then delete the Input
    newTask.querySelectorAll(".todo-template__text")[0].textContent = todoInput;
    document.querySelector("#create-task__task-input").value = "";

    // Add Event Listeners for the Buttons
    newTask
      .querySelectorAll("button")[0]
      .addEventListener("click", editItem.bind(null, todoID));
    newTask
      .querySelectorAll("button")[1]
      .addEventListener("click", deleteItem.bind(null, todoID));
  } else {
    easterEgg++;
    // alert("Please enter a valid string");
    if (easterEgg === 3) {
      // Rick Roll
      window.open("https://www.youtube.com/watch?v=oHg5SJYRHA0");
    }
  }
};

const editItem = (toDoID) => {
  let taskDiv = document.querySelector("#todo" + toDoID);
  let taskContent = taskDiv.querySelectorAll(".todo-template__text")[0];
  let buttonFunction = taskDiv.querySelectorAll("button")[0];

  // This checks which functionality the Button should perform
  if (buttonFunction.textContent === "Edit") {
    buttonFunction.textContent = "Save";
    taskContent.style.display = "none";
    let inputField = document.createElement("input");
    inputField.value = taskContent.textContent;
    console.log(taskContent);
    taskDiv.prepend(inputField);
  } else {
    buttonFunction.textContent = "Edit";
    taskContent.textContent = taskDiv.querySelectorAll("input")[0].value;
    taskContent.style.display = "block";
    taskDiv.querySelectorAll("input")[0].remove();
  }
};

const deleteItem = (toDoID) => {
  document.querySelector("#todo" + toDoID).remove();
};

// "To Do" Button Event Listener
document
  .querySelector("#create-task__button-submit-input")
  .addEventListener("click", addItem);

// Date Display
const dateElement = document.querySelector("#date");
let today = ([month, date, year] = new Date().toLocaleDateString().split("/"));
dateElement.innerHTML = today;
