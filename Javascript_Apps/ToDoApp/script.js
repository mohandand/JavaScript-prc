const inputEle = document.querySelector('.input-box');
const todoDisplay =document.querySelector('.display');
const addbutton = document.querySelector('.add-button');
let value;

inputEle.addEventListener('input',(e) => {
     value = e.target.value;
})

addbutton.addEventListener('click', () => {
    let todoDiv = document.createElement('div');
    todoDiv.innerText =value;
    let deletButton =document.createElement('button');
    deletButton.innerText="Delete"
    deletButton.addEventListener('click', () => {
        todoDisplay.removeChild(todoDiv);
    })
    todoDiv.appendChild(deletButton);
    todoDisplay.appendChild(todoDiv)
})


