// Inch to feet without function
const inch= 84;
const feet= inch/12;
console.log(feet);

// Inch to feet with function

function inchToFeet(inch){
    const feet= inch/12;
    return feet;
}
const inch=84;
const convertFeet= inchToFeet(inch);
console.log(convertFeet);

// mile to km without function
 const mile= 10;
 const mileToKm= mile*1.60;
 console.log(mileToKm);

// mile to km with function

function mileTokm (givenMile){
    const km= mile*1.60;
    return km;
}
const mile= 10;
const totalKm= mileTokm(mile);
console.log(totalKm);

// odd even with function
function isEven(checkForEven){
    if(checkForEven%2==0){
        return true;
    }
    else{
        return false;
    }
}
const inputEven= 32;
const checkEven= isEven(inputEven);
console.log(checkEven);

// leap year check using function

function leapYearCheck(year) {
  if (year % 4 == 0) {
    if (year % 100 == 0) {
      if (year % 400) {
        return "Leap year.";
      } else {
        return "Not leap year.";
      }
    } else {
      return "leap year.";
    }
  } else {
    return "Not leap year.";
  }
}
const year = 2008;
const chechForLeapYear = leapYearCheck(year);
console.log("Your", year, "is", chechForLeapYear);

// odd sum from an Array

function findSumOfArray(oddNumbers) {
  sum = 0;
  for (let i = 0; i < oddNumbers.length; i++) {
    const element = oddNumbers[i];
    sum = sum + element;
    // console.log(index, element,sum);
  }
  return sum;
}

function findOddOfArray(numbers) {
  const oddNumbers = [];

  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element % 2 !== 0) {
      oddNumbers.push(element);
    }
  }
  return oddNumbers;
}
const numbers = [1,2,3,4,5,6,7];
const oddNumbers = findOddOfArray(numbers);
console.log(oddNumbers);
const sumofArray = findSumOfArray(oddNumbers);
console.log(sumofArray);

// factorial using for lop
function getFactorial(number) {
  // 8*7*6*5*4*3*2*1
  let multiplication = 1;
  for (let i = 1; i <= number; i++) {
    multiplication = multiplication * i;
  }
  return multiplication;
}
const number = 10;
const factorialResult = getFactorial(number);
console.log(factorialResult);
 
