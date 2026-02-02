// Var //
// This is globally and function scoped

// var age = 20;

// if(true){
//     console.log(age);
// }

// function solve() {
//     var age = 25;
//     console.log(age);
// }
// solve();

//Here Var we can declare multiple time
// var x = 20;
// var x = 25;


// Let //
// This is Blocked Scoped

// {
//     let age = 23;
//     console.log(age);
// }

// here we can't declare multiple time only declare once
// let a = 25;
// let a = 30;

// function example() {
//     let a = 25;
//     a = "Kuna";
//     console.log(a);
// }
// example();


// Const //
//This is not redeclare and not redefined

// const a = 20;
// console.log(a);


// a = 30;
// console.log(a);
//this is showing error beacause this is not aplicable for redeclare



// ** DataType ** //

// let marks = 20;
// marks = "Sameer"
// marks = true

// let marks;
// console.log(marks);

// let value = null;
// console.log(value);

// marks = 245345313121534535456435454543544354353454543543545454445554545;
// console.log(marks);


// let result = 50;
// console.log(typeof(result));


//Symbol

let id = Symbol("id");

let user = {
  name: "Sameer",
  age: 21,
  [id]: 101
};

console.log(user[id]); 
console.log(user.age);
console.log(user.name);



