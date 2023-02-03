function getFactorial(number){
    // 8*7*6*5*4*3*2*1
    let multiplication= 1;
    for(let i=1;i<=number;i++){
        multiplication= multiplication*i;
    

    }
    return multiplication;

}
const number= 10;
const factorialResult= getFactorial(number);
console.log(factorialResult);