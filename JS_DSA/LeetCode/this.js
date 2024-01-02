function exc(){
    console.log(this)
}
//console.log(this);
exc();

myObj = {
    name:"me",
    fname:this.name,
    iam:this
}
console.log(myObj)