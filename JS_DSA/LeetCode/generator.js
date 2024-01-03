function* generatorFun(){
    yield 1;
    yield 2;
}

let iternator = generatorFun();
console.log(iternator.next());
console.log(iternator.next());
console.log(iternator.next());
