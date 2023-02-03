// practice 1 
var fruits = ['Apple','Banana','Orange'];
var banana= fruits.indexOf('Banana');
console.log(banana);
fruits[1]='Mango';
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.push('Watermelon');
console.log(fruits);

// practice 2 
var myScore= 87;
var tomScore=54;
var janeScore=95;
var peterScore=65;
var jonScore=40;

if(myScore>100){
    console.log("Are Vai ki korsen,100+ Mark Hoy ?");
}
else if(myScore>=80 && myScore<=100){
    console.log("A grade");
}
else if(myScore>=60 && myScore<80){
    console.log("B Grade"); 
}
else if(myScore>50 && myScore<60){
    console.log("C Grade"); 
}
else if(myScore>=40 && myScore<50){
    console.log("D Grade"); 
}
else{
    console.log("F Grade"); 
}

if(tomScore>100){
    console.log("Are Vai ki korsen,100+ Mark Hoy ?");
}
else if(tomScore>=80 && tomScore<=100){
    console.log("A grade");
}
else if(tomScore>=60 && tomScore<80){
    console.log("B Grade"); 
}
else if(tomScore>50 && tomScore<60){
    console.log("C Grade"); 
}
else if(tomScore>=40 && tomScore<50){
    console.log("D Grade"); 
}
else{
    console.log("F Grade"); 
}

if(janeScore>100){
    console.log("Are Vai ki korsen,100+ Mark Hoy ?");
}
else if(janeScore>=80 && janeScore<=100){
    console.log("A grade");
}
else if(janeScore>=60 && janeScore<80){
    console.log("B Grade"); 
}
else if(janeScore>50 && janeScore<60){
    console.log("C Grade"); 
}
else if(janeScore>=40 && janeScore<50){
    console.log("D Grade"); 
}
else{
    console.log("F Grade"); 
}


if(peterScore>100){
    console.log("Are Vai ki korsen,100+ Mark Hoy ?");
}
else if(peterScore>=80 && peterScore<=100){
    console.log("A grade");
}
else if(peterScore>=60 && peterScore<80){
    console.log("B Grade"); 
}
else if(peterScore>50 && peterScore<60){
    console.log("C Grade"); 
}
else if(peterScore>=40 && peterScore<50){
    console.log("D Grade"); 
}
else{
    console.log("F Grade"); 
}

if(jonScore>100){
    console.log("Are Vai ki korsen,100+ Mark Hoy ?");
}
else if(jonScore>=80 && jonScore<=100){
    console.log("A grade");
}
else if(jonScore>=60 && jonScore<80){
    console.log("B Grade"); 
}
else if(jonScore>50 && jonScore<60){
    console.log("C Grade"); 
}
else if(jonScore>=40 && jonScore<50){
    console.log("D Grade"); 
}
else{
    console.log("F Grade"); 
}

// exercise 3.1

var number1= 13;
var number2=79;
var number3=45;

if(number1>number2 && number1>number3){
    console.log(number1,"is the largest number.");
}
else if(number2>number1 && number2>number3){
    console.log(number2,"is the largest numebr.") ;
    
}
else{
    console.log(number3,"is the largest numebr.") ;

}
// exercise 3.2

var side1=9;
var side2=8;
var side3=9;

if(side1==side2 || side1==side3 || side2==side3){
    console.log("Isosceles");
}
else{
    console.log("Not Isosceles");
}



