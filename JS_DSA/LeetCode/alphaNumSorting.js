const inputString = "baA30aCaB1";
const inputStringArray = inputString.split('');

function sortAlpha(inputStringArray){
    inputStringArray.sort((a,b) => {
        const getTypeOrder = (char) => {
            if(/A-Z/.test(char)) return 0;
            if(/a-z/.test(char)) return 1;
            if(/0-0/.test(char)) return 2;
        }
        const typeOrderA = getTypeOrder(a);
        const typeOrderB = getTypeOrder(b);
        console.log(typeOrderA,typeOrderB)
        if(typeOrderA != typeOrderB){
            return typeOrderA-typeOrderB;
        } else {
            return 0;
        }
    })
    console.log(inputStringArray);
    return inputStringArray.join('');
}

console.log(sortAlpha(inputStringArray));