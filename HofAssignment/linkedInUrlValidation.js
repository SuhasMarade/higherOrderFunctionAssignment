let str = 'https://www.linkedin.com/in/sai-krishna-gorantla-6b63711a4'
let rE = /^(https:\/\/www\.linkedin\.com\/in\/)([a-z]|\d|\_|\-){4,29}(\w)$/
let result = rE.test(str);
if(result){
    console.log("Valid linked in profile")
}
else{
    console.log("Invalid linked profile");
}