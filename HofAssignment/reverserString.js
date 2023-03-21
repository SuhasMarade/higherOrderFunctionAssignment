let input = "abcd";
function reverseString() {
    newString = "";
    for(let i = input.length -1; i >= 0; i--){
        newString += input[i];
    }
    console.log(newString);
}
setTimeout(reverseString, 5000);
