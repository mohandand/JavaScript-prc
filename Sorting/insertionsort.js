function insertionsort(arr){
    for(let i=0;i<arr.length-1;i++){
        for(let j=i+1;j>0;j--){
            if(arr[j]<arr[j-1]){
                swap(arr,j,j-1)
            }else{
                break;
            }
        }
    }
    return arr
}

function swap(arr,first,second){
    let temp = arr[first];
    arr[first] = arr[second];
    arr[second] =temp
}

console.log(insertionsort([5,1,6,3,2,4]))