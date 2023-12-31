function twoSum(ar, k){
    let obj={};
    for(let i=0;i<ar.length;i++){
        let diff = k-ar[i];
        if(obj[diff] !== undefined){
            return [obj[diff],i]
        } 
        obj[ar[i]] =i
    }
    return -1;
}
console.log(twoSum([2,7,11,15],9))