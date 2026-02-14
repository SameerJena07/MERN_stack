// let obj = {
//     age: 20,
//     ht: 6,
//     wt: 80
// }

// console.log(obj);

// obj.color = "white"

// console.log(obj);



//* Object Cloning //*


// using Spread Operator //

// let src = {
//     age: 20,
//     ht: 6,
//     wt: 80
// }

// let dest = {...src};

// src.age = 90;

// console.log("src: ", src);

// console.log("dest: ", dest);


// using assign // 

// let src = {
//     age: 20,
//     ht: 6,
//     wt: 80
// }
// let src2 = {
//     value: 101,
//     name: "Sameer"
// }

// let dest = Object.assign({}, src, src2);

// src.age = 90;

// console.log("src: ", src);

// console.log("dest: ", dest);



// using Iteration Method //


let src = {
    age: 20,
    ht: 6,
    wt: 80
};

let dest = {};
//cloning using iteration

for (let key in src){
    let newKey = key;
    let newValue = src[key];
    //insert newKey and Value in dest and create a clone
    dest[newKey] = newValue;
}

console.log(dest);
