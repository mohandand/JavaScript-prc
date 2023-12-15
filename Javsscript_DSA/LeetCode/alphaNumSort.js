function inPlaceOrder(inputString) {
    const strArray = Array.from(inputString);

    let capitalIndex = 0;
    let lowercaseIndex = 0;

    for (let i = 0; i < strArray.length; i++) {
        const char = strArray[i];

        if (isUpperCase(char)) {
            // Swap current character with the character at capitalInde
            [strArray[i], strArray[capitalIndex]] = [strArray[capitalIndex], strArray[i]];
            capitalIndex++;
        } else if (isLowerCase(char)) {
            // Swap current character with the character at lowercaseIndex
            [strArray[i], strArray[lowercaseIndex]] = [strArray[lowercaseIndex], strArray[i]];
            lowercaseIndex++;
        }
        // For numbers, leave them in their place
    }

    return strArray.join('');
}

function isUpperCase(char) {
    return char >= 'A' && char <= 'Z';
}

function isLowerCase(char) {
    return char >= 'a' && char <= 'z';
}

// Example usage:
const inputString = "abA30aCaB1";
const orderedString = inPlaceOrder(inputString);

console.log(orderedString);
