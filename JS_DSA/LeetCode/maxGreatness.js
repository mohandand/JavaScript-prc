var maximizeGreatness = function(nums) {
    nums.sort((a, b) => a - b);
    let i = 0;
    console.log(nums);
    for(let j=0; j<nums.length; j++){
        if (nums[i] < nums[j]) i++;
    }
    return i;
};

const arr = [1, 3, 5, 2, 1, 3, 1];
const maximumGreatness = maximizeGreatness(arr);
console.log(maximumGreatness);