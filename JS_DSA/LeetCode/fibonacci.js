// function fib(n){
//     let res = [0,1];
//     for(let i=2;i<=n;i++){
//         let first = res[i-1];
//         let second = res[i-2];
//         res.push(first+second)
//     }
//     return res;
// }
// console.log(fib(6));

function fib(n){
    if(n<=1){
        return n
    } else {
        return fib(n-1) + fib(n-2);
    }
}
function fibSeries(limit){
    let res =[];

    for(let i= 0; limit>=fib(i); i++){
        res.push(fib(i));
    }
    return res
}
console.log(fibSeries(5))