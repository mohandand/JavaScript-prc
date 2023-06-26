function selectionsort(arr){
    let start=0
    for(let i=0;i<arr.length;i++){
    let last = arr.length-i-1;
    let maxIndex = getMax(arr,start,last)
    swap(arr,maxIndex,last)
    }
    return arr
}

function getMax(arr,start,end){
    let max = start;
    for(let i=0;i<=end;i++){
        if(arr[max]<arr[i]){
            max=i;
        }
    }
    return max;
}

function swap(arr,maxIndex,last){
    let temp = arr[maxIndex];
    arr[maxIndex] = arr[last]
    arr[last] = temp
}
console.log(selectionsort([1,3,2,4]))