function arrayChallenge(arr) {
    const n = arr.length;
    const result = [];
    for (let i = 0; i < n; i++) {
        let counter = 0;
        for (let j = i - 1; j >= 0; j--) {
            const diff = Math.abs(arr[j] - arr[i]);
            console.log(diff);
            if (arr[j] > arr[i]) {
                counter -= diff;
            } else {
                counter += diff;
            }
        }

        result.push(counter);
    }

    return result;
}

// Example usage:
const arr = [2, 4, 3];
const resultArray = arrayChallenge(arr);
console.log(resultArray);
