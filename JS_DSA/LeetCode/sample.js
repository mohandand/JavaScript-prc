function adjRem(str,k){
    let stack = [];
    for(let i=0;i<str.length;i++){
        let current=s[i];
        let peek = stack[stack.length-1]
        if( stack.length === 0 || peek[0] !== current){
            stack.push([current, 1])
        } else {
            peek[1]++
            if(peek[1]>k){
                stack.pop();
            }
        }
    }
  let res =''
    for(let [char, count] of stack){
        res = res + char.repeat(count)
    }
    return res;
}

console.log(adjRem("deeedbbcccbdaa",3))