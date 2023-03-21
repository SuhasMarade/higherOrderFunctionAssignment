let rE = /https?:\/\/([a-z]|[0-9]|.)+\.[a-z]+/
let str = 'https://go.qwiklabs.com/arcade'
let result = rE.test(str);
if(result){
    console.log("Input Matches conditions")
}
else{
    console.log("Input does not Match")
}