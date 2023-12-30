function plusOne(num){
   for(let i = num.length-1;i>=0;i--){
      if(num[i]+1 > 9){
        num[i] =0
      } else {
        num[i] = num[i]+1;
        return num;
      }
   }
    num.unshift(1);
    return num
}
console.log(plusOne([9,9,9,9]));