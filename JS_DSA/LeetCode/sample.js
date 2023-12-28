function numSubarrayProductLessThanK(arr,k){
    let res =0,product =1, left=0,right=0;
    while(right < arr.length){
        product *=arr[right];
        while(product >= k){
            product /= arr[left];
            left++;
        }
        res = res + right -left +1;
    }
    return res
}


const nums = [10, 5, 2, 6];
const k = 100;
console.log(numSubarrayProductLessThanK(nums, k));