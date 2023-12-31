var missingNumber = (nums) => {
    let n = nums.length;
    // Calculate the expected sum of the first 'n' integers using the formula n * (n + 1) / 2
    let expectedSum = (n * (n + 1)) / 2;
    // Calculate the actual sum of the elements in the array
    let actualSum = nums.reduce((sum, num) => sum + num, 0);
    // The missing number is the difference between the expected sum and the actual sum
    return expectedSum - actualSum;
};
// Test cases
console.log(missingNumber([3, 0, 1]));  // Output: 2
console.log(missingNumber([0, 1]));      // Output: 2
