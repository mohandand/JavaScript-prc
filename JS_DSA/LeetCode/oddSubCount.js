function evenSubarray(numbers, k) {
    let result = 0 ,oddCount = 0,left = 0;
    for (let right = 0; right < numbers.length; right++) {
        if (numbers[right] % 2 !== 0) {
            oddCount++;
        }
        while (oddCount > k) {
            if (numbers[left] % 2 !== 0) {
                oddCount--;
            }
            left++;
        }
        result += right - left + 1;
    }
    return result;
}

// Example usage:
const numbers = [1, 2, 3, 4];
const k = 1;
const distinctSubarrays = evenSubarray(numbers, k);
console.log(distinctSubarrays);
