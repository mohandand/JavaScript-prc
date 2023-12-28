var numSubarrayProductLessThanK = function(nums, k) {
    if (k <= 1) return 0;
    let res = 0, left = 0, right = 0, product = 1;
    const subarrays = [];
    while(right < nums.length) {
        product *= nums[right];
        while(product >= k)  {
            product /= nums[left];
            left++;
        }
        // Collect the subarrays
        for (let i = right; i >= left; i--) {
            const subarray = nums.slice(i, right + 1);
            subarrays.push(subarray);
        }
        res += right - left + 1;
        right++;
    }
    console.log(subarrays);
    return res;
};

// Example usage:
const nums = [10, 5, 2, 6];
const k = 100;
console.log(numSubarrayProductLessThanK(nums, k));
