function incOrder(arr,b){
    let count = 0;
    for(let i=1;i<arr.length;i++){
        while(arr[i-1]>=arr[i]){
            arr[i] += b;
            count++;
        }
    }
    return count;
}

console.log(incOrder([1,2,2,3],2))