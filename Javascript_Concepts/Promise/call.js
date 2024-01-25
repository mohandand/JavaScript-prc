function sayHello(){
    console.log(`hello ${this.name}`);

}

let person = {name: 'mohan'}

sayHello.call(person);