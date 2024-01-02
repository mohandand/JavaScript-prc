function exc(){
    console.log(this)
}
//console.log(this);


myObj = {
    name:"me",
    fname:typeof this,
    sayhello: function(){
        console.log(`${this.name} hello`)
    }
}
console.log(myObj)
console.log(myObj.sayhello())