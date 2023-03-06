// function (practicals) - [IMP]
// - reusual block of code

//syntax/formula/format

// regular/normal/function - common syntax
// () - parenthesis

// syntax ->
// function functionName (parameter1, parameter2, ......, parameterName)

// console.log(3+2);//5
// // statements / instructions
// // console.log ("Hello");
// }

// example ->


// define/declare
// function add() {
//  console.log(3+3);//6
// }

// use / call
// add();

// console.log(3+4);//7

//----------------------------------

// mini calculator ( to do addition of 2 numbers)
// let numberOne = Number(prompt("Enter First Number"));//20 -> "20" -> 20
// let numberTwo = +prompt("Enter Second Number");

// console.log("The Addition Is:" + (numberOne + numberTwo ));

// Type Conversion
//let isRed = true;

//console.log(Boolean(0));

//String(123);//"123"

//Boolean(1);//true

//Number("Hello");//NoN
//Number("245");//245
//+"657";//657

// Integer (2) , Float (2,5)
//console.log(parseInt("4.5"));//4
//console.log(parseFloat("2.776"));//2.776

// Difference between Number and parseInt 
//console.log(Number("4hjgv"));//NoN
//console.log(parseInt("3jshg"));//3

// // Type Coercion -> (javascript)
// let a = 5;
// a = "Hello";


// mini calculator ( to do addition of 2 numbers)
//let numberOne = Number(prompt("Enter First Number"));//20 -> "20" -> 20
//let numberTwo = +prompt("Enter Second Number");

//console.log("The Addition Is:" + (numberOne + numberTwo ));

//let numberThree = Number(prompt("Enter First Number"));//20 -> "20" -> 20
//let numberFour = +prompt("Enter Second Number");

//console.log("The Addition Is:" + (numberThree + numberFour ));

//let numberFive = Number(prompt("Enter First Number"));//20 -> "20" -> 20
//let numberSix = +prompt("Enter Second Number");

//console.log("The Addition Is:" + (numberFive + numberSix ));

// function
//function add() {
//  let numberOne = Number(prompt("Enter First Number"));
//let numberTwo = +prompt("Enter Second Number");
//console.log("The Addition Is:" + (numberOne + numberTwo ));
//}
//add();
//add();
//add();

// functions with parameters -> (example 1)
//function add(numberOne, numberTwo) {
//  console.log("Addition Is :");
// function printGreetings(name) {
// console.log(numberOne + numberTwo);
//}
//add(1,2);
//add(3,2);
//add(3,1);

//(example 2)
// console.log(`Hello ${name},Welcone To MxoTag Technology!`);
//}

//let userName = prompt("Enter Your Name");
//printGreetings(userName);

//printGreetings("kiran");// function call
//printGreetings("sakshi");
//printGreetings("onkar");
//printGreetings("shubhangi");
//printGreetings("suraj");

// return keyword (how to return value from function) ->

   let s = 5; //global scope

 function acceptNumber(){
 let a = +prompt("Enter Number");//10
 let b = +prompt("Enter second no.");
  
 console.log(s);//5
 console.log(a);//10
 console.log(b);
  // a-> local scope/block level scope/block scope

 return a,b //return some value to calling program

}

// acceptNumber();

console.log("value of s:" + s);//5
// console.log("value of a:" + a);//error - a is not define
console.log("value of a:" + acceptNumber ());//10
console.log("value of b:" + acceptNumber ());//10

//------------------------------------------------------------------

// 1. function declaration/regular function/normal function [as seen above]
// 2. function expression -> (function assigned to a variable)

// expression -> a + b;
// x + y = z

// let sum = 50; //expression
let min = function (){
 console.log("hi");
}; //function expression

// console.log(sum); //prints entire function code
min(); //runs the function stored inside variable

//------------------------------------------------------------------
// types of function expression -
// -> 1. Arrow Function (most populer)
// let sum = () => {} //syntax of arrow function

function sum(no1, no2){
 return no1 + no2;
}
  console.log(sum(10,20));

let mult = (no) => no*2;
console.log(mult(10));

// // -> 2. Annonymous function (function without any name)//hackers website
// let sum = () => {}; //no name
// let add = function () {}; //no name
 
// sum();
// add();

//----------------------------------------------------------
//IIFE [Immediately Involked Function Expression]

// 1. using arrow function 
((name) => {
  let age = 15;
  console.log("Name :" + name + "| Age : " + age);
})("sakshi");

((name) => {
  let age = 22;
  console.log("Name :" + name + "| Age : " + age);
})("sona");


// // // 2. using normal function 
(function (name) {
  let age = 23;
  console.log("Name :" + name + "| Age : " + age);
})("kiran")

// console.log(age);// invalid


