document.querySelector('#create-task__button-submit-input').addEventListener('click', addItem);

function addItem(){
    let todoTemplate = document.querySelector('.todo-template');
    let newTask = todoTemplate.cloneNode(true);
    todoTemplate.after(newTask);
}



function editItem(){


}



function deleteItem(){


}


