var countSubstrings = function(s) {
    let count =0;
    for(let i=0;i<s.length;i++){
        countPalindrome(s,i,i)
        //countPalindrome(s,i,i+1)
    }
    return count
   

 function countPalindrome(s,l,r){
    console.log(s,l,r)
     while(l>=0 && r<s.length && s[l] == s[r]){
         count++;
         l--;
         r++;
     }
     console.log(count);
 }
}

console.log(countSubstrings("bcb"))