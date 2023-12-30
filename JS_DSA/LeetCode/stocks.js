function stocks(arr){
    let profit=0;
    let buyStock = arr[0];

    for(let i =1;i<arr.length;i++){
        if(buyStock>arr[i]){
            buyStock =arr[i]
        } else {
            profit = Math.max(profit, arr[i]-buyStock)
        }
    }
    return profit
}