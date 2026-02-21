
// * PROMISES * //


// let firstPromise = new Promise( (resolve, reject) => {
//     console.log("Sameer");

//     // resolve(1001);

//     reject(new Error("Internal Server Error!"));
// });





// Asynchronous Code //


// let firstPromise = new Promise( (resolve, reject) => {
//     setTimeout(function sayMyName() {
//         console.log("My Name is Sameer Jena");
//     }, 10000);
    
//     resolve(1);
// });



let promise1 = new Promise( (resolve, reject) => {

    let success = true;
    if(success){
        resolve(10);
    }
    else {
        reject(-1);
    }
});


promise1.then((message) => {
    console.log("First msg: " + message);
    return 20;
}).then((message) => {
    console.log("Second msg: " + message);
    return 30;
}).then((message) => {
    console.log("Third msg: " + message);
}).catch((error) => {
    console.error(error);
}).finally((message) => {
    console.log("I am final, I can run");
    
})





// promise1.then((message) => {
//     console.log("Then ka msg is " + message);
// }).catch((error) => {
//     console.log("Error: " + error);
// })