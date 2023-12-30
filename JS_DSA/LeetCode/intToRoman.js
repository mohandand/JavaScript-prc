const table = {
    '1000':'M',
    '900':'CM',
    '500':'D',
    '400':'CD',
    '100':'C',
    '90':'XC',
    '50': 'L',
    '40': 'XL',
    '10': 'X',
    '9': 'IX',
    '5': 'V',
    '4': 'IV',
    '1': 'I'    
}

let digits = Object.keys(table).sort((a,b) => b-a)

function intToRoman(num){
    let res="";
    for(let i =0;i<digits.length;i++){
        while(digits[i]<=num){
            res = res + table[digits[i]]
            num = num-digits[i];
        }
        if(num<=0) return res;
    }
}