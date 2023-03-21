function numberGenerator(){
    console.log(Math.random());
}
let delay = 3000;

setTimeout(()=>{
        console.log(" 3 seconds to generate Number")
    
}, 1000)
setTimeout(()=>{
        console.log(" 2 seconds to generate Number")
    
}, 2000)
setTimeout(()=>{
        console.log(" 1 seconds to generate Number")
    
}, 3000)
setTimeout(numberGenerator,delay);
