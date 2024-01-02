function step1(cb){
    setTimeout(() => {
        console.log("step1 completed")
        cb();
    },1000)
}

function step2(cb){
    setTimeout(() => {
        console.log("step2 completed")
        cb();
    },1000)
}

function step3(cb){
    setTimeout(() => {
        console.log("step3 completed")
        cb();
    },1000)
}

step1(() => {
    step2(() => {
        step3(() => {
            console.log("Entire Process Completed")
        })
    })
})