function minimalOperations(words) {
    const result = [];
    for (const word of words) {
        let changes = 0;
        for (let i = 1; i < word.length; i++) {
            if (word[i] === word[i - 1]) {
                changes++;
                i++; // Skip the next character as it has been changed
            }
        }
        result.push(changes);
    }
    return result;
}
// Example usage:
const words = ['add', 'boook', 'break'];
const substitutions = minimalOperations(words);
console.log(substitutions); // Output: [1, 1, 0]
