
// * OBJECT * //
// let user = {
//     Name: "Sameer Jena",
//     Address: "Khordha",
//     age: 20,
//     height: "5Feet 3Inch"
// };

// console.log(user);


// let obj = {
//     Name: "Sameer Jena",
//     Address: "Khordha",
//     age: 20,
//     height: "5Feet 3Inch",
//     greet: function(){
//         console.log("I am a student");
//     }
// };

// for (let key in obj){
//     console.log(key, " ", obj[key]);
// }

// console.log(user);
// user.greet();

// let obj2 = obj;
// console.log(obj);



// * ARRAY * //

// let arr = [1,2,3,4,5,6]
// console.log(arr);


// using constructor //

// let brr = new Array("sameer", 1, true);

// brr.push('sameer');
// brr.pop();

// brr.shift();
// brr.unshift("sameer jena");
// brr.push(20);
// brr.push(40);
// brr.push(70);

// console.log(brr.slice(3,5));

// brr.splice(1,0,'kunal');

// console.log(brr);

// console.log(brr[1]);



//* MAP *//

// let arr = [10,20,30];

// arr.map((number, index) => {
//     console.log(number);
//     console.log(index);
    
// })

// let ansArray = arr.map((number) => {
//     return number*number;
// })
// console.log(ansArray);




//* filter *//

// let arr = [10,20,30,11,21,55,22]

// let evenArray = arr.filter((number) =>{
//     if (number % 2 == 0){
//         return true;
//     } else {
//         return false
//     }
    
//     OR //

//     return number % 2 == 0;
// })
// console.log(evenArray);


//***//

// let arr = [1,2,'sameer','kuna',null]

// let ans = arr.filter((value) => {
//     if(typeof(value) == 'string'){
//         return true;
//     } else {
//         return false;
//     }
// })
// console.log(ans);



//* Reduce *//

// let arr = [10,20,30,40];

// let ans = arr.reduce((acc,curr) =>{
//     return acc+curr;
// }, 0);

// console.log(ans);



// SORT //

// let arr1 = [9,1,7,4,2,8]

// arr1.sort();
// console.log(arr1);

// let arr2 = [9,1,7,4,2,8]

// arr2.sort().reverse();
// console.log(arr2);


// indexOf //

// console.log(arr1.indexOf(9));
// console.log(arr2.indexOf(7));



// find() //


// let numbers = [5, 130, 8, 12, 44];

// let result = numbers.find((num) => {
//     return num > 10
// });

// console.log(result);


/***/


// let fruits = ["apple", "banana", "mango"];

// let result = fruits.find((fruit) => {
//     if (fruit === "banana"){
//         return true;
//     } else {
//         return false;
//     }
// });

// console.log(result);


/***/


// let users = [
//   { id: 1, name: "Sameer" },
//   { id: 2, name: "Kuna" },
//   { id: 3, name: "Arpit" }
// ];

// let user = users.find(u => u.id === 2);

// console.log(user);


/***/


// forEach()//

// let arr = [10,20,30];

// arr.forEach((value, index) => {
//     console.log("Number: ", value, "Index: ", index); 
// });


// let arr = [10,20,30];

// let length = arr.length;
// console.log("length: ", length);

// // traditional loop

// for (let index = 0; index < length; index++){
//     console.log(arr[index]);
    
// }



// for of //

// let arr = [10,20,30,40];

// for (let value of arr){
//     console.log(value);
// }


// let fullName = "sameer";

// for (value of fullName){
//     console.log(value);
    
// }


/***/


// let arr = [10,20,30,40,50];

// function getSum(arr) {
//     let len = arr.length;
//     let sum = 0;
//     for (let index = 0; index<len; index++){
//         sum = sum + arr[index];
//     }
//     return sum;
// }

// let totalSum = getSum(arr);
// console.log(totalSum);


// OR //

let arr = [10,20,30,40,50];

function getSum(arr) {
    
    let sum = 0;
    arr.forEach((value) => {
        sum = sum + value;
    });
    return sum;
}

let totalSum = getSum(arr);
console.log(totalSum);
