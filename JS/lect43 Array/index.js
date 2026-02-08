
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

let arr = [10,20,30,40];

let ans = arr.reduce((acc,curr) =>{
    return acc+curr;
}, 0);

console.log(ans);

