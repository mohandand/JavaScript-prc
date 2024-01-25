function readFile(cb){
    return new  Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("Read File Completed");
            cb();
        },1000)
    })
}
function writeFile(cb){
    return new  Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("Write File Completed");
            cb();
        },1000)
    })
}

function uploadFile(cb){
    return new  Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("Upload File Completed");
            cb();
        },1000)
    })
}

readFile()
.then(() => processFile())
.then(() => uploadFile())
.then(()=> {console.log("process completed")})