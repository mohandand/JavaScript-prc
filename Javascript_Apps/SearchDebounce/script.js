const inputEle = document.querySelector('.input-box');
const diplayEle = document.querySelector('.result');

const data = ["Apple","Bat","Cat"];
let value='';
function myDebounce(cb,d){
    let timer;
    return function(data){
        if(timer){
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            cb(data);
        },d)
    }
}

function serachValue(serVal){
    if(!serVal){
        diplayEle.innerHTML='';
        return
    }
    diplayEle.innerHTML='';
    let res = data.filter((item) => {
        return item.toLowerCase().includes(serVal.toLowerCase());
    })
    if(res.length>0){
        res.forEach((item) => {
        let liEle = document.createElement('li');
        liEle.innerText = item
        diplayEle.appendChild(liEle)
        })
    }
}

let getValues = myDebounce(serachValue,5000);

inputEle.addEventListener('input', (e) => {
    value=e.target.value;
    getValues(value)
})

//Throttle

function myThrottle(cb,d){
    let intialTime;
    return function(arg){
        let currentTime = Date.now();
        if(currentTime-intialTime > d){
            cb(arg);
            intialTime= currentTime
        }
    }
}