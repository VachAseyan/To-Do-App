let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', () => {
    let event = document.createElement('li');
    event.innerText = inputField.value;
    toDoContainer.appendChild(event);
    inputField.value = "";
    event.addEventListener('click', () => {
        event.style.textDecoration = "line-through";
    })
    event.addEventListener('dblclick', () => {
        toDoContainer.removeChild(event);
    })
})