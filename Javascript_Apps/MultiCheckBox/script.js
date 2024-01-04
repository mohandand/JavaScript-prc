const buttonElement = document.querySelector('.select-button');
const optionsContainer = document.getElementById('optionscontainer');

buttonElement.addEventListener('click', () => {
    optionsContainer.classList.toggle('show');
})

window.addEventListener('click', (event) => {
    if(!event.target.matches('.select-button')){
        optionsContainer.classList.remove('show');
    }
})

const options = document.querySelectorAll(`input[type="checkbox"]`);

options.forEach((checkbox) => {
    checkbox.addEventListener('change',() => {
        let selectedItems = Array.from(options).filter((c) => c.checked).map((c) =>  c.value)
        buttonElement.innerText = selectedItems.length>0 ? selectedItems.join('') : "Select Options"
    })
})