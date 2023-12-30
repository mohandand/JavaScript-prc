let alpha = "abcdefghijklmnopqrstuvwxyz";

function alphaPos(str){
    let alphAr =alpha.split('');
    return str.toLowerCase().replace(/[^a-zA-Z]/g,'').split('').map(char => {return alphAr.indexOf(char) + 1})
}
console.log(alphaPos("abcdefz"));
