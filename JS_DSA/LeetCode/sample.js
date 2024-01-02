function lss(str){
    let maxLength=0;
    let char = new Set();
    let left=0;
    for(let i=0;i<str.length;i++){
        while(char.has(str[i])){
            char.delete(str[left]);
            left++;
        }
        char.add(str[i]);
        maxLength = Math.max(maxLength, char.size)
    }
    return maxLength;
}
console.log(lss("bbbbb"));