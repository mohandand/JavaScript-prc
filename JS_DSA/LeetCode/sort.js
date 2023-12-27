let ar = [1,2,3,4,5];

console.log(ar.sort((a,b) => {
    console.log(a,b);
    return b-a
}))