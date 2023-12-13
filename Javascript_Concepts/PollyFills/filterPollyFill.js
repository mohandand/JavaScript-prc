var array = [1,2,3,4,5,6]

let res =array.filter((el)=>{return el>2})

console.log(`BulitIn Result : ${res}`)

Array.prototype.myFilter = function(cb){
    console.log(this);
    let arr= [];
    for(let i=0;i<this.length;i++){
        if(cb(this[i])){
            arr.push(this[i])
        }
    }
    console.log(arr)
}

array.myFilter((el)=>el>2)


