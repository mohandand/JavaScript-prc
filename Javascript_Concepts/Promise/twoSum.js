function twoSum(nums, target){
    let obj = {};
    for(let i=0;i<nums.length;i++){
        if(obj[nums[i]]>0){
            return [obj[nums[i]],i]
        } 
        obj[target-nums[i]] = i;
    }

    return []
}
console.log(twoSum([2,5,6,8],8))