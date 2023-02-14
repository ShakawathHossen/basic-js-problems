function reverseString(text){
// here text.length-1 cause index always one minus from length
let reversed= '';
    for(let i=text.length-1; i>=0; i--){
        const element=text[i];
        reversed+=element;
    }
    return reversed;

}
const myString ='I am a student';
const reverse=reverseString(myString);
console.log(reverse);