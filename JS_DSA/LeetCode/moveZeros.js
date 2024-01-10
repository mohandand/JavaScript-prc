//[0,1,0,3,12] = [1,0,0,3,12] = [1,3,0,0,12] =[1,3,12,0,0]
function moveZeros(nums){
    let  left = 0;
    let  right = left+1;

    while(right < nums.length){
        if(nums[left] !==0){
            left++;
            right++;
        } else {
            if(nums[right] !== 0){
                [nums[left], nums[right]] = [nums[right],nums[left]]
                left++;
            }
            right++;
        }
        console.log(nums)
    }
    return nums
}
console.log(moveZeros([0,1,0,3,12,0]));