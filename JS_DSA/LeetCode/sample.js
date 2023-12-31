function validAn(w1, w2){
    let obj1 = {};
    for(let i=0;i<w1.length;i++){
        obj1[w1[i]] ? obj1[w1[i]]++ :  obj1[w1[i]]=1
    }
    for(let char in w2){
        if(obj1[w2[char]]){
            obj1[w2[char]]--
        } else {
            return false;
        }
    }
   return Object.values(obj1).every(val => val===0)
}

console.log(validAn("baat", "taab"))