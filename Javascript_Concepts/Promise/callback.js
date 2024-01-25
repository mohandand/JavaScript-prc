function readFile(cb){
    setTimeout(() => {
        console.log("Read File Compmpleted");
        cb()
    },1000)
}

function processFile(cb){
    setTimeout(() => {
        console.log("processFile Compmpleted");
        cb()
    },1000)
}

function uploadFile(cb){
    setTimeout(() => {
        console.log("Upload File Compmpleted");
        cb()
    },1000)
}


readFile(() => {
    processFile(() => {
        uploadFile(() => {
            console.log("Process Completed");
        })
    })
})