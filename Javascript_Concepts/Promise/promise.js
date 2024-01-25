function readFile(){
    return new  Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("Read File Completed");
            resolve();
        },1000)
    })
}
function writeFile(cb){
    return new  Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("Write File Completed");
            resolve();
        },1000)
    })
}

function uploadFile(cb){
    return new  Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("Upload File Completed");
            resolve();
        },1000)
    })
}

readFile()
.then(() => processFile())
.then(() => uploadFile())
.then(()=> {console.log("process completed")})
.catch((error) => console.log(error))