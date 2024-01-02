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

//Solution using Promise

function pStep1(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("promise step1 completed")
            resolve();
        },1000)
    })
}

function pStep2(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("promise step2 completed")
            resolve();
        },1000)
    })
}

function pStep3(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("promise step3 completed")
            resolve();
        })
    })
}

pStep1()
.then(() => {pStep2()})
.then(() => {pStep3()})
.catch(error => {
    console.log("an error occured")
})


