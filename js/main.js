document
  .querySelector("#create-task__button-submit-input")
  .addEventListener("click", addItem);

function addItem() {
  let todoTemplate = document.querySelector(".todo-template");
  let newTask = todoTemplate.cloneNode(true);
  todoTemplate.after(newTask);

  let input = document.getElementById("create-task__task-input").value;
  document.getElementById("create-task__task-input").value = "";
}

function editItem() {}

function deleteItem() {}
