// * Function * //


// function sayMyName() {
//     console.log("Sameer Jena");
// }

// sayMyName();



// function printCounting() {
//     for (let i = 1; i<=100; i++){
//         console.log(i);
        
//     }
// }
// printCounting();



// function printNumber(num) {
//     console.log("Printing Number is:", num);
// }
// printNumber(5);


// function getAverage(num1, num2) {
//     let avg = (num1 + num2) / 2;
//     console.log("The avg value is:", avg);
    
// }
// getAverage(5, 6);



// Return functions //

// function getSum(a, b, c) {
//     let sum = a+b+c;
//     return sum;
// }

// let ans = getSum(1,2,3);
// console.log("Printing Sum:", ans);


function getName(firstName, lastName) {
    let fullName = firstName + " " + lastName;
    return fullName;
}
let fullName = getName("Sameer", "Jena");
console.log(fullName);

