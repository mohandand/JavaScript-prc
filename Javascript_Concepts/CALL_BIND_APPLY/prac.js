let obj = {
    name:'Mohan'
}

function sayHello(age, location){
    return `Hi This is ${this.name} and I am from ${age} and my location is ${location}`
}

console.log(sayHello(27, 'USA'));
console.log((sayHello.call(obj, 27, 'USA')));
console.log((sayHello.apply(obj, [27, 'USA'])))
let bindFun = sayHello.bind(obj);
console.log(bindFun(27,'USA'));