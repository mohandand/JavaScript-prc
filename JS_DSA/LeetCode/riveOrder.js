function maxDifference(arr) {
    let maxDiff = -1;
    let minSoFar = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > minSoFar) {
            maxDiff = Math.max(maxDiff, arr[i] - minSoFar);
        } else {
            minSoFar = arr[i];
        }
    }
    return maxDiff;
}
const exampleArr1 = [5, 3, 6, 7, 4];
console.log(maxDifference(exampleArr1)); // Output: 4
