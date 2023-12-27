/*
[1,-2,3,4,-3]
*/ 

function maxSumSub(arr){
    let start = 0;
    let end = 0;
    let currentStart = 0;
    let maxSum = arr[0];
    let currentMaxSum = arr[0];
   for(let i =1;i<arr.length;i++){
        if(arr[i] > currentMaxSum + arr[i]){
            currentMaxSum = arr[i];
            currentStart = i;
        } else{
            currentMaxSum = currentMaxSum + arr[i];
        }
        if(currentMaxSum > maxSum){
            maxSum = currentMaxSum;
            start = currentStart;
            end = i;
        } 
   }
   return arr.slice(start, end+1)
}

console.log(maxSumSub([1,-2,3,4,-3]))