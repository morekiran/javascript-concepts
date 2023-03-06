// contol stuctores ->

// - it is used to take some decisions based on conditions.
// - we can execute/run our code conditionally.
// - it provides decisions making abilities to our code/program.

// 1. if -> if the condition is true, we'll execute a block of code.

// syntax ->
// if (condition) {
//  //statements
// }

// example ->
// let age = 10;

// if (age >= 18) {
//     console.log("Votting Allowed for the Age : " + age );
// }

// ----------------------------------------------------

// 2. if else ->
// - if the condition is true, we'll execute (if) block of code.. else we'll execute an
// - only one block of code can be executed at a time.

// syntax ->
// if (condition) {
//    //statements;
//}

// example ->
 
// let age = 10;
 
// if (age >= 18) {
//     console.log("Votting Allowed");
// } else {
//     console.warn("You're Please Try Next Year");
// }

//--------------------------------------------------------

// 3. nested if ->

// syntax ->
// (condition) {
// if (condition) {
//     //statements;
// }
// } else {
//    //statements
// }

// example ->
// let age = 20;

// if (age >= 18) {
// if (age <= 100) {
//    console.log("Votting Allowed");   
// } else {
//    console.log("You're Not A Human! You're Adimanav");
//   }
// } else {
//    console.warn("You're Minor, Please Try Next Year! ");
// }

//-------------------------------------------------------------

// 4. if else if ->

// syntax ->
// if (condition) {
//   //statements
// } else  if (conditiom) {
//    //statements
// }

// example ->
//  let age = 14;

// if (age >= 18) {
//     console.log("Vallid Allowed");
// }  else if (age >= 15) {
//     console.log("Try After Few Years!");
// }  else {
//     console.log("You're a child, play with zunzuna!");
// }

//-----------------------------------------------------------------

// practice :

// let netWorth = 1000000; //1M
// let netWorth = prompt ("Enter Your Networth!");

// if (netWorth >= 1000000) {
//     console.log("You're A Millionaire!");
// } else if (netWorth >=  700000) {
//    let res = confirm ("You're Near About A Millionaire");
//     console.log(res);
// //    alert ("You're Near About A Millionaire");
// } else {
//     console.log("Work Hard Man!");
// }

//---------------------------------------------------------------------

// 5. for loop ->

// syntax ->
//for (initialization; CSSConditionRule; incr / decr) {
//   //statements;
//}

// example - table of 2
// for (let i =1; i <= 10; i++) {
//     console.log(`2 * ${i} = ${i*2}`);
// }

//------------------------------------------------------------------------

// 6. while loop ->

// syntax ->
// let i = initialvalue;
// while (condition) {
//   //statements;
//   //i++/--;
// }

// example ->
// console.log("While Start");
// let i = 1;
// while (i <= 10) {
//     console.log(i * 2);
//    i++;
// }

//---------------------------------------------------------------------------

// 7. do-while loop ->

// syntax ->
// let i = initialvalue;
// do {
//   //statements;
//   i++/--;
// } while (condition);

//example ->
// console.log("Do-While Start");
// let j = 11;
// do {
//     console.log(2 + " * " + j + " = " + j * 2 );
//     j++;
// } while (j <= 10);

//-------------------------------------------------------------------------------

// 8. switch case ->
// example - (course)
// case 1 -> MERN
// case 2 -> MEAN
// case 3 -> PHP
// case 4 -> JAVA
// default -> always execute if there is no match -> NOT INTRESTED

// syntax
//    switch(choice) {
//     case choice1:
//         break;
//    case choice2:
//         statements;
//         break;
//    case choice3:
//         statements;
//         break;
// }
//         statements;

// example ->
let choice = prompt(`Enter your choise!
1. MERN
2. MEAN
3. PHP
4. JAVA`);
    
switch(+choice) {
        case 1:
        console.log("MERN");
        break;    // FIRST CASE LA BREAK DHILA NAHI TAR SECOND CASE PN CHOOSE HOIL TYAMULE PRATEK CASE LA BREAK DHILA AAHE.(BREAK)
        case 2:
        console.log("MEAN");
        break;
        case 3:
        console.log("PHP");
        break;
        case 4:
        console.log("JAVA");
        break;
        default: console.log("NO COURSE CHOOSEN!");
}

// //-----------------------------------------------------------------------------------

// // 9. keyword - break , continue

// // 9.1 break - we used this keyword to break the flow of block of statements.

// // example ->
for (let i = 0; i < 10; i++) {
    if (i === 5) {
    console.log("found it!");
    break;
     } 
     console.log(i);
}     

// // 9.2 continue - we use this keyword to skip a iteration in our loop. 

// // example ->
for (let i = 0; i < 10; i++) {
        if (i === 5) {
        console.log("5 found, so we skip it!");
        continue;
         } 
         console.log(i);
    }     
    

