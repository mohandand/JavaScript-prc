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