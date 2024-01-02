function balPar(str){
    let stack = [];
    let obj = {
        '{':'}',
        '[':']',
        '(':')'
    }
    for(let i=0;i<str.length;i++){
       if(obj[str[i]]){
        stack.push(str[i])
       } else {
        const topStack = stack.pop();
       if(obj[topStack] !== str[i]){
        return false
       }
       }
    }
    return true
}

console.log(balPar("(({[]}))"))