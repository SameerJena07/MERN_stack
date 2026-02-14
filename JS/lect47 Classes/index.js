
//Default Parameter Value Passing

// function sayName(fName = "Shadow", lName = "YT"){
//     console.log("My name is: ", fName, " ", lName);
    
// }
// sayName("Sameer Jena");


// function sayName(fName = "Uday", lName = fName.toUpperCase()){
//     console.log("My name is: ", fName, " ", lName);
    
// }
// sayName("sameer");


// Default Parameter of function have passing Object and Array easily

// function solve(value = {age: 20, ht: 5.5, wt: 80 }){
//     console.log("HELLO JII: ", value);
    
// }
// solve();


function solve(value = "Sameer"){
    console.log("HELLO JII -> ", value);
    
}
solve(undefined);



// class Human {

//     //properties
//     age = 13;  //public
//     #weight = 80;  //private
//     ht = 15;

//     constructor(newAge, newHeight, newWeigth){
//         this.age = newAge;
//         this.ht = newHeight;
//         this.#weight = newWeigth;
//     }

//     //behaviour
//     walking(){
//         console.log("I am Walking", this.#weight);
//     }
//     running(){
//         console.log("I am Running");
        
//     }

//     get fetchWeigth(){
//         return this.#weight;
//     }

//     set modifyWeight(val){
//         this.#weight = val;
//     }
// }
// let obj = new Human(50, 190, 90);

// console.log(obj.fetchWeigth);
// obj.walking();

