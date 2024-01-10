const dateIn = document.querySelector('.date-input');
dateIn.addEventListener('change', (e) => {
    let val = e.target.value;
    console.log(val)
})

async function fetchData(){
    let data = await fetch('https://dog.ceo/api/breeds/image/random');
    let res = await  data.json();
     return  res.message
}
let url;
fetchData().then((res) => {
    console.log(res);
    let image = document.createElement('img')
image.src = res;
document.querySelector('.container').appendChild(image);
});



