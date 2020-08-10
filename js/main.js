document.querySelector('#create-task__button-submit-input').addEventListener('click', addItem);
let counter = 0;
function addItem(){
    counter++;
    let todoTemplate = document.querySelector('.todo-template');
    let newTask = todoTemplate.cloneNode(true);
    newTask.id = "todo"+ counter;
    console.log(newTask.id);
    todoTemplate.after(newTask);
    let input = document.getElementById("create-task__task-input").value;
    console.log(newTask.querySelectorAll(":scope > .todo-template__text").textContent);
    /*document.getElementsByClassName("todo-template__text")[counter].textContent = input;*/

}

function editItem(){


}



function deleteItem(){


}


