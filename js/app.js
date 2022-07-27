const inputTask = document.querySelector(".add__txt");
const btnAdd = document.querySelector(".add__btn");
const btnDelete = document.querySelector(".list-item__btn-delete");
const btnDeleteAll= document.querySelector(".btn-deleteAll");
const listTask= document.querySelector(".task__list");

let tasks= [];

btnAdd.addEventListener("click", addTasks);

function addTasks(){
    const task = inputTask.value;
    if(task == ""){
        showError("Debes Escribir una tarea");
    }

    const taskObj={
        task: task,
        id: Date.now()
    }

    tasks= [...tasks, taskObj];

    createHTML();
}

function createHTML(){
    listTask.innerHTML = "";
    tasks.forEach((task)=>{
        const li = document.createElement("li");
        li.classList.add("task__list-item");
        li.innerHTML = `<span class="list-item__linea"></span><p class="list-item__texto">${task.task}</p><span class="list-item__btn-delete" data-id = '${task.id}'>X</span>`;
        listTask.appendChild(li);
    });
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