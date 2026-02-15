
// Compile time error

//syntax error

// console.log(1;


//Runtime error
//reference error

// console.log(x);


// try {
//     console.log("try block start here");
//     //error -> Reference error
//     console.log(x);
//     console.log("try block ends here");
//     //a

//     //b

//     //c
// } 
// catch (error) {
//     //define krte h, error k sath app kya karna chahte h
//     //retry logic
//     //fallback mechanism
//     //logging
//     //custom error
//     console.log("I am inside catch block");
//     console.log("your error is here: ", error);
// }
// finally{
//     console.log("I will run every time, as i am finally block");
    
// }




// Let's Create a custom error //

// try{
//     //reference error
//     console.log(x);
// }
// catch(error){
//     throw new Error("first declare then print");
// }



let errorCode = 100;
if (errorCode == 100){
    throw new Error("Invalid JSON")
}