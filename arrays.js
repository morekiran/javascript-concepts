// Array [JS MOST IMP FOR THE INTERVIEWS]
// - array is an collection of multiple data elements/values.
// - javascript arrays are homegeneous as well as hertrogeneous.
// - there is no fix size to javasript arrays.

// syntax -

//const data = [studentName, standard, course]

// let studentName = "kiran";

// const student = [studentName,  "15th", "MERN"];

// console.log(student);

// console.log("The Course Is : " + student[2]);

// student[2]= "MEAN";

// console.log("The Course Is:" + student[2]);

// //adding a new value ->
// //student[3] = "New Value";//not proper

// // array property ->
// console.log(student.length);

//---------------------------------------------------------------

// array methods and functions ->
// 1. add nwe element at the end
    //  const numbers = [1,2,3,4,5,];
    //  numbers.push(6);
    //  console.log(numbers);

// 2. delete last element
    // const numbers = [1,2,3,4,5];
    // numbers.pop(0);
    // console.log(numbers); 
    
// 3. add new element at start 
    // const numbers = [1,2,3,4,5];
    // numbers.unshift();
    // console.log(numbers);
    
// 4. delete new element from start
    // const numbers =[1,2,3,4,5];
    // numbers.shift();
    // console.log(numbers);  
//-----------------------------------------------------------      
// MOST IMP 
// 1.map
// example 1 ->

// const names = ["kiran", "sakshi","sonakshi","mona"];

// console.log(names);

// const res  = names.map((name, index) => {
//     console.log("Student Name:" + name);
//     console.log("Index Is : " + index);

//     return "RAJU";
// });
// console.log(res);

// //example 2 ->

// const numbers = [1,2,3,4,5,6,7,8,9,10];

// const doubledNumbers = numbers.map((number) => {
//     console.log(number);

//     return number *2;
// });

// console.log(numbers);
// console.log(doubledNumbers);

// 2.filter -> (to filter the records)

//    const mobiles = [
//     {
//         brand: "mi",
//         model: "mi note 6 pro",
//         price: "14999",
//     },
//     {
//         brand: "realme",
//         model: "realme pro",
//         price: "18999",
//     },
//     {
//         brand: "apple",
//         model: "iphone 12 max pro",
//         price: "80999",
//     },
//     {
//         brand: "realme",
//         model: "realme C2",
//         price: "7999",
//     },
//   ];
// // example 1 ->   
    //    const realmeMobiles = mobiles.filter((mobile) => {
    //     console.log(mobile.brand);

    //      if (mobile.brand == "realme") {
    //         return true;//truthy
    //      }
    //    });
    //         // console.log(realmeMobiles);

// example 2 ->
//      const under10k = mobiles.filter((mobile) => {
//       console.log(mobile.brand);

//      if (mobile.price <= 10000) {
//         return true;//truthy
//      }
//    });
//         console.log(under10k);
        
// 3.reduce (multiple value add karun ekach result deto [1,3,4,5,]; =13)
    //    const numbers = [1,2,3,4,5,6,7,8,9];
    //    const finalResult = numbers.reduce((result,number) => {
    //     result = result + number; // + cha jagi aapan konte pn opertors gheu shakto
    //     return result;
    //    });
    //  console.log(finalResult);

// 4.forEach -> same as loop

//     const result = names.forEach((name,index) => {
//     console.log("student Name:" + name );
//     console.log("Index Is:" + index);
// });

//      console.log(result);//undefined

//-------------------------------------------

//#spread operator - [...]
// const numbersOne = [1,2,3];//==> 1,2,3
// const numbersTwo = [4,5,6];
// const numbersCombined =[...numbersOne,...numbersTwo];

// console.log(numbersCombined);

//#rest operator - [...] //==> 1,2,3 ===> [1,2,3]
// function sum(...numbers) {
//     let total =0;
  
//     for(let i = 0 ; i <numbers.length;i++){
//     total=total+numbers[i];
//     }

//     return total;
//     }

//     console.log(sum(1,2,3));

//----------------------------------------

// Array Destructuring
// let fullName = ["Narendra","Damodar","Modi"];

//without destructuring[Aam jindagi]
// let firstName=fullName[0];
// let lastName=fullName[1];
// console.log(fullName);
// console.log(lastName);

//with destructuring [Mentos jindagi]
// let [firstName, ,lastName] = fullName
// console.log(fullName);
// console.log(lastName);

// example3
const array=[
    {   
        id:1,
        name:"kiran",
    },
    {
        id:12,
        name:"onkar",
    },
    {
        id:10,
        name:"harshada",
    },
    {
        id:13,
        name:"sakshi",
    }

]

const ids = array.filter((array)=>{
    // console.log(array.name);
    if(array.id===1){
        return true;
    }
})

console.log(ids);

