let taskInput = document.querySelector("input");
let addButton = document.querySelector(".addBtn");
let tasksUl = document.querySelector("ul");

addButton.addEventListener("click", addTask);

function addTask() {
    let taskLi = document.createElement("li");
    let doneInput = document.createElement("input");
    let taskSpan = document.createElement("span");

    doneInput.type = "checkbox";
    taskSpan.textContent = taskInput.value;

    taskLi.appendChild(doneInput);
    taskLi.appendChild(taskSpan);
    tasksUl.appendChild(taskLi);

    doneInput.addEventListener("input", finishTask);

    taskInput.value = ""
}
function finishTask(event) {
    let status = event.target.checked;
    let parent = event.target.parentElement;
    if (status === true) {
        parent.classList.add("line-through");
    } else {
        parent.classList.remove("line-through");
    }
}