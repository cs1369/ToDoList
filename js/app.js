const inputTask = document.querySelector(".add__txt");
const btnAdd = document.querySelector(".add__btn");
const btnDelete = document.querySelector(".list-item__btn-cerrar");
const btnDeleteAll= document.querySelector(".list-item__btn-cerrar");

btnAdd.addEventListener("click", addTasks);

function addTasks(){
    const task = inputTask.value;
    if(task == ""){
        showError("Debes Escribir una tarea");
    }
}

function showError(error){
    
}