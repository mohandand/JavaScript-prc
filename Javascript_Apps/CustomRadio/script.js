const radioButtons = document.querySelectorAll('input[type="radio"]');
const labels = document.querySelectorAll('label');
console.log(radioButtons);
radioButtons.forEach((radioButton) => {
    radioButton.addEventListener('click', () => {
        labels.forEach((label) => {
            label.style.backgroundColor="white";
        })
        if(radioButton.checked){
            const label = document.querySelector(`label[for=${radioButton.id}]`)
            label.style.backgroundColor = "red";
        }
    })
})