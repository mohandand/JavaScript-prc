Data1 = [{id:1,name:'glass'},{id:2,name:'door'}]
Data2 = [
{ dimension: { height : '12cm', width:20}, details:{sid: 1, status: true}}
, { dimension: { height : '18cm', width:200}, details:{sid: 2, status: false}}]

let newObject = {};

for(let item of Data1){
    newObject[item.id] = item;
}

let res = [];

for(let item of Data2){
    let reqObj = {
        ...newObject[item.details.sid],
        height: item.dimension.height,
        status: item.details.status
    }
    res.push(reqObj);
}

console.log(res);