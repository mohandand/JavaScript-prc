const selectButton = document.querySelector('.input-box');
const checkBoxList = document.querySelector('.options-div');

selectButton.addEventListener('click', () => {
    checkBoxList.classList.toggle('hide');
})

window.addEventListener('click', (event) => {
    if(!event.target.matches('.input-box')){
        checkBoxList.classList.add('hide');
    }   
})

const checkBoxes = document.querySelectorAll('input[type="checkbox"]');
console.log(checkBoxes);

checkBoxes.forEach((checkBox) => {
    checkBox.addEventListener('change',() => {
        const selectedOptions = Array.from(checkBoxes).filter((c) => c.checked).map(c => c.value);
        selectButton.innerText = selectedOptions.length> 0 ? selectedOptions.join('') : `Select options` ;
    })
})