function commonPrefix(arr){
    for(let i=0;i<arr[0].length;i++){
        for(let j =1;j<arr.length;j++){
            if(arr[0][i] !== arr[j][i]) return arr[0].slice(0,i);
        }
    }
}
console.log(commonPrefix(["flower","flow","flight"]));''