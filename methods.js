// ------ Number Functions/Methods----------

let number = 123.45;

console.log(number);
console.log(number.toString()); //convert the number into string - "123.45"
console.log(number.toPrecision(10)); //exact length of number - 123.4500
console.log(Number(number)); // 123.45
console.log(parseInt(number)); // 123
console.log(parseFloat(number)); // 123.45

let num = "ABC";

console.log(Number(num)); //NaN

console.log(isNaN(num)); // true

// ----------------------------------------------------
// ---Math Functions/Methods---
// 1.Math.abs() -> absolute number - removes negative signs
console.log(Math.abs(-12.998)); //12.998

// 2.Math.ceil() -> next integer number
console.log(Math.ceil(35.1)); //36

// 3.Math.floor() -> removes floating point and gives the integer
// console.log(Math.floor(35.4)); //35

// 4.Math.log() -> returns log of given number
console.log(Math.log(15)); //2.302585092994046

// 5.Math.min() -> returns the minimum number
console.log(Math.min(10, 8, 45, 3)); //3

// 6.Math.max() -> returns the maximum number
console.log(Math.max(10, 8, 45, 3)); //45

// 7.Math.pow() -> calculate power of given digit (base, exponational)
console.log(Math.pow(2, 3)); //8

// 8.Math.random() -> 0-1 - generate a random number between 0 to 1.
console.log(Math.random() * 155); //random value between 0 to 1 -> 0.45435

// ---------------------------------------------------
// ------String Methods/Functions--------

// 1 .length – Finding the length of the string:
var str = "this string has 29 characters";
console.log(str.length);
29;

// 2 .trim() – Removing white space:
var str = "    this string has 29 characters";
console.log(str.trim());
// this string has 29 characters

// 3 .includes() – Check if string contains substring:
var str = "maxotag technology";
var str2 = "maxotag";
var str3 = "Test";
console.log(str.includes(str2));
//true
console.log(str.includes(str3));
false;

// 4 .indexOf() — Find the index of a substring:
var str = "maxotag technology ";
console.log(str.indexOf("maxotag"));
//0
console.log(str.indexOf("Test"));
-1;

// 5 .toUpperCase() — Capitalizes entire string:
var str = "maxotag technology";
console.log(str.toUpperCase());
// MAXOTAG TECHNOLOGY

// 6 .toLowerCase() — Lower cases entire string:
var str = "mAxotag teChnOloGy";
console.log(str.toLowerCase());
// maxotag technology

// 7 .replace() — Replaces strings with new values:
var str = "snowlyte technology";
console.log(str.replace("snowlyte", "maxotag"));
// maxotag technology

// 8 .slice() — Return a section of a string:
var str = "maxotag technology";
console.log(str.slice(4));
// tag technology

// 9 .split() — Converts string into an array of strings:
var str = "maxotag technology test";
console.log(str.split(" "));
["maxotag", "technology"];

// 10 .repeat() — Repeats a string a specified number of times:
var str = "maxotag technology. ";
console.log(str.repeat(2));
// maxotag technology. maxotag technology.

// 11 .match() — Returns array of matching strings:
var str = "maxotag technology";
console.log(str.match("maxotag"));
["maxotag"];

// 12 .charAt() — Returns the character at an index:
var str = "maxotag technology";
console.log(str.charAt(5));
//x

// 13 .charCodeAt() —Return the unicode at an index:
var str = "Pass";
console.log(str.charCodeAt(0));
//115

// 14 .concat() – Adding the two strings:
var str = "maxotag technology ";
var str1 = "Test";
console.log(str.concat(str1));
//maxotag technology Test

// 15 .search() – Find the string:
var str = "maxotag technology ";
console.log(str.search("technology"));
0;
//if it will -1 then string not there

// 16 .substring() – Extracts the characters from a string:
var str = "maxotag technology ";
console.log(str.substring(2, 5));
//xot

// 17 .substr()- Extracts parts of a string:
var str = "maxotag technology";
console.log(str.substr(0, 7));
//maxotag

// 19 .startsWith() – Check if a string starts with:
var str = "maxotag technology ";
console.log(str.startsWith("maxotag"));
//true

// 20 .endsWith() – Check if a sting ends with:
var str = "maxotag technology";
console.log(str.endsWith("technology"));
//true

// 21 .lastIndexOf() – returns the position of the last occurrence of a specified value in a string:
var str = "maxotag technology";
console.log(str.lastIndexOf("technology"));
//8

// ----------JS Dates & Date Methods------------------
// Date Object -

console.log(d.getMonth());
setInterval(() => {
  let d = new Date();
  console.log(`${d.getHours()} : ${d.getMinutes()} : ${d.getSeconds()}`);
}, 1000);

setInterval(() => {
  let d = new Date();
  console.log(
    `${d.getHours()} : ${d.getMinutes()} :${d.getSeconds()} : ${d.getMilliseconds()}`
  );
}, 1000);

let d = new Date();

console.log(`${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`);

console.log(d.getTime());
setInterval(() => {
  console.log("first");
}, 1000);
// Get Methods
d.getFullYear(); //Get the year as a four digit number (yyyy)
d.getMonth(); //Get the month as a number (0-11)
d.getDate(); //Get the day as a number (1-31)
d.getHours(); //Get the hour (0-23)
d.getMinutes(); //Get the minute (0-59)
d.getSeconds(); //Get the second (0-59)
d.getMilliseconds(); //Get the millisecond (0-999)
d.getTime(); //Get the time (milliseconds since January 1, 1970)
d.getDay(); //Get the weekday as a number (0-6)

// Set Methods
// setDate(); //Set the day as a number (1-31)
// setFullYear(); //Set the year (optionally month and day)
// setHours(); //Set the hour (0-23)
// setMilliseconds(); //Set the milliseconds (0-999)
// setMinutes(); //Set the minutes (0-59)
// setMonth(); //Set the month (0-11)
// setSeconds(); //Set the seconds (0-59)
// setTime(); //Set the time (milliseconds since January 1, 1970)