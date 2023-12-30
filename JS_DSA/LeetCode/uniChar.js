function uniChar(str){
   let obj = {};
   Array.from(str).forEach((char) => {
    obj[char] ? obj[char]++ : obj[char] =1
   })
   console.log(Object.values(obj));
   for(let item in obj){
    if(obj[item] === 1){
        return item;
    }
   }
   //return Object.values(obj).every((item) => item === 1);
}
console.log(uniChar('abcde'))