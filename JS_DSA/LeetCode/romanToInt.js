function romanToInt(str){
    const symbols = {
        I:1,
        V:4,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000
    }
    
    let count=0;
    for(let i=0;i<str.length;i++){
        symbols[str[i]] < symbols[str[i+1]] ? count -=symbols[s[i]] : count +=symbols[s[i]]
    }
    return count;
}