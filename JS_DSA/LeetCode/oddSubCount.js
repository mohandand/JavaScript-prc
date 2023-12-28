function oddSubCount(arr,k){
    let res=0; oddcount=0, left=0;
    for(let right=0;right<arr.length;right++){
        if(arr[right]%2 !== 0){
            oddcount++
        }
        while(oddSubCount>k){
            if(arr[left] % 2 !== 0){
                oddcount--
            }
            left++;
        }

        res += right-left+1
    }
    return res;
}
// Example usage:
const numbers = [1, 2, 3, 4];
const k = 1;
const distinctSubarrays = oddSubCount(numbers, k);
console.log(distinctSubarrays);