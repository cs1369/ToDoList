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
    const msgError=document.createElement("p");
    msgError.textContent = error;
    msgError.classList.add("add__error");
    document.querySelector(".add__container").appendChild(msgError);

    setTimeout(() => {
        msgError.remove();
    }, 2000);
}