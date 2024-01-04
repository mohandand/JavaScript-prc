let data = ["Apple","Bat","Cat","Batment","Dog"]

let inputElem = document.getElementById('inpuitbox');
const displayEle = document.querySelector('.suggested-list');

inputElem.addEventListener('input', (e) => {
    let value = e.target.value;
    displayEle.innerHTML='';
   if(value){
    let res = data.filter((item) => {
        return item.toLowerCase().includes(value.toLowerCase());
    })
    if(res.length>0){
        displayEle.classList.add('show');
        res.forEach((item) => {
            const newDiv = document.createElement('div');
            newDiv.innerText = item;
            displayEle.appendChild(newDiv);
            newDiv.addEventListener('click',() => {
                displayEle.innerHTML='';
                displayEle.classList.remove('show');
                inputElem.value=item;
            })
        })
       
    }
   }
})

window.addEventListener('click', (e) => {
    if(!e.target.matches('.inpuitbox')){
        displayEle.innerHTML='';
        displayEle.classList.remove('show');
    }
})