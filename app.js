//synchronud
// for (let i = 0; i < 1000000000000000000000000000; i++) {
// console.log(i)
    
// }
// console.log("haseeb")


//asynchronus

function runAfter1Sec(){
    setTimeout(function(){
        console.log("haseeb")
    },1000)
}
runAfter1Sec()

console.log("hello")