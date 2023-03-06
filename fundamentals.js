// -----------------javascript comments--------------------

//1 sinlel line Comment

//example-
//this is my comment//

//2 multiline comment

//example-
/* this is my comment
   having multipule lines */

   // operators ->

   // 1. Arithmatic operators ->
   // ++ (increment) - increase the value of 1
  // -- (Decrement) - decrease the value of 1

   //1 postfix increament
     //let a = 5;
     //console.log("value of a",a++)//5

   //2 postfix decrement
     //let b = 5;
    //console.log("value of b",b--);//5

   //3 prefix increment
     //let c = 5;
    //console.log("value of c",++c);//6

   //4 prefix decrement
    // let d = 5;
   //console.log("value of d",--d);//4

   // exponantial / power ->
   // 4**3; (4*4*4)
   // console.log(4**3);//64

   //---------------------------------------------------------------------------

   // 2. Assignment operators ->

  //  let a = 5;
  //  let b = "5";
   // let b = a;
   // b += a; //b = b + a; //10
   // b *= a; //b = b * a;

//console.log(a == b);//true
   // console.log(a === b);//false(strictly equal to)
   //console.log(a != b);//false
   //console.log(a !== b);//true
   //console.log(a > b);//false
   //console.log(a < b);//false
   //console.log(a >= b);//true
   //console.log(a <= b);//true

  //   console.log("hello + world"); // string concatination - helloworld 

  //  let firstName = "kiran";
  //  let course = "Mearn";
  //  console.log("My Name Is" + firstName +  "And I'm Learning" + course);

  //  // USING TEMPLATE STRINGS/STRING LITERALS
  //    console.log(`My Name Is ${ firstName } And I'M Learning  ${course}`);

  //    console.log(`
  //            *
  //          *   *
  //         *  *  *
  //   `)
 //------------------------------------------
   // logical operators ->
   //1. AND ->
   // true && true && true = true 
   // true && false = false  
   // false && true = false 
   // false && false = false 
   
   //2. OR -> (at least one true)
   // true || true = true
   // true || false = true
   // false || true = true 
   // false || false = false

   //3. NOT -> ( inverse )
   // !true = false 
   // !false = true 
   // !false && !false = (true && true = true

  // -------------------------------------------------
  // Array (user defined)
  // let marksForStudent1 = [49,50,70,49,30]
  // let marksForStudent2 = [49,50,70,50,30]
  // let marksForStudent3 = [49,50,70,49,30]
// ----------------------------------------------------

// Javascript Object -> object is the collection of some methods & some properties


//   let marksForStudent1 = {
//       English :49,
//       hindi :50,
//       marathi :70,
//       science :49,
//       maths :30,
// };

// let student2 = {
////properties
//   English :49,
//   hindi :50,
//   marathi :70,
//   science :50,
//   maths :30,
  
////methods/functions
//    result:() => {
//     console.log("percentage scored:"
//      + (student2.English + 
//       student2.hindi + 
//       student2.marathi +
//       student2.science +
//       student2.maths ) /5 ,"%"
//      );
//    },
// };
// to accses the value of keys/properties of an object 
// console.log(Student2 ["English"]);//bracket notation
// console.log(Student2.hindi);//dot notation
// student2.result();

// -------------------------------------------------------

//this keyword ->

// let student3 = {
// //   //properties
//   English :49,
//   hindi :50,
//   marathi :70,
//   science :50,
//   maths :30,
  
// //methods/functions
//    result:function() {
//     console.log("percentage scored:"
//      + (this.English + 
//       this.hindi + 
//       this.marathi +
//       this.science +
//       this.maths ) /5 ,"%"
//      );
//    },
// };
// student3.result();

// ----------------------------------------------------------

// Method Borrowing (call,apply,bind)->

// let studentOne = {
//   English :49,
//   hindi :50,
//   marathi :70,

//  showResult:function(studentName,courseName) {
//      console.log("studentName: "+studentName);
//      console.log("courseName: "+courseName);
//      console.log("percentage:"
//      + (this.English + 
//       this.hindi + 
//       this.marathi ) /3 ,"%"
//      );
//    },
// };
//call show result method
// studentOne.showResult("onkar","MERN");

// ---------------------------------
// let studentTwo = {
//   English :49,
//   hindi :50,
//   marathi :70,
// };

//call show result method
// studentTwo.showResult("kiran");//error

// 1.call ->
// console.log("call->");
// studentOne.showResult.call(studentTwo,"kiran" ,"MERN");//function

// // 2.Apply ->
// console.log("apply->");
// studentOne.showResult.apply(studentTwo,["suraj" ,"MERN"]);//function

// // 3.Bind ->
// console.log("bind->");
// let showResultforS2=studentOne.showResult.bind(
//   studentTwo);
  // "sakshi" ,"MEAN");
  //function

  // console.log(showResultforS2);
  // showResultforS2("sakshi","MEAN");
  // showResultforS2("sona","JAVA");
  // showResultforS2("mona","MERN");
  // showResultforS2("shree","react");

//rest and spread operator ->[refer to arrays.js]
    
//Array Destructuring -> [refer to arrays.js]

//Object Destructuring ->
// let pmSaheb = {
//   firstName :"Narendra",
//   middleName :"Damodar",
//   lastName :"Modi",
// };

// let {firstName,lastName}= pmSaheb;

// console.log(firstName);
// console.log(lastName);

//-------------------------------------------
//setTimeout & setInterval (Methods/Functions)

//1.setTimeout
// console.log("Start");

// setTimeout(()=>{
//   console.log("Your otp has been expired!");
// },3000);

// console.log("End");

// //2.setInterval

// setInterval(()=>{
//   console.log("Hello!");
//   console.log("By!");
// },3000);
// //--------------------------------

//Fetch API ->
// fetch ("https://api.github.com/user")
// .then((res) => res.json())
// .then ((data)=>{
//   console.log(data);
// });

//-------------------------------------------
//Web Browser Storage - localStorage,sessionStorage,cookies

//localStorage ->
// let userName =localStorage.getItem("userName");

// if(userName) {
//   console.log("Name Is:" + userName);
// }else{
//   let firstName=prompt("Enter Your First Namr!");
//   localStorage.setItem("userName",firstName);
//   console.log(firstName);
// };

//sessionStorage->
// let userName =sessionStorage.getItem("userName");

// if(userName) {
//   console.log("Name Is:" + userName);
// }else{
//   let firstName=prompt("Enter Your First Namr!");
//   sessionStorage.setItem("userName",firstName);
//   console.log(firstName);
// };

//cookies ->cookies are accessible on both client as well as server
//syntax-> document.cookie = "name=value";

// -----------------------------------------------------------
// Exception/Error Handling (try,catch,finaly)

// Without Exception/Error Handling
// const a = 5;
// console.log(a);
//  a = 6; // error-->program will stop 
// console.log("Hello");//never printed

// Using Exception/Error Handling
try{
  const a = 5;
console.log(a);
a = 6;
}catch (error){
  console.log("Error is-")
  console.error(error);
}finally{
    console.log("Hello");

}

// ----------------------------------------------------------------
// Hoisting
// add(10,20);
// function add(no1,no2){
//   console.log(no1 + no2)
// }

// console.log(a);//no error (undefined)
// var a = 5 ;

// Hoisting will not affect arrow functions & variables declared with const/let
// arrow
// add(10,20);//error
// const add = (no1,no2) =>{
//   console.log(no1 + no2);
// };

// // const
// console.log(a);
// const a = 5;

// // let
// console.log(b);
// let b = 5;s

// --------------------------------------------------------------------
// callback function ->

const add = (no1,no2) => console.log(no1 + no2);
const mult = (no1,no2) => console.log(no1 * no2);
const div = (no1,no2) => console.log(no1 / no2);
const sub = (no1,no2) => console.log(no1 - no2);


function calculater (no1,no2,func){
  console.log("Welcome To Calculater");
  func(no1,no2);
}

calculater(10,20,add);
calculater(10,20,mult);
calculater(10,20,div);
calculater(10,20,sub);

