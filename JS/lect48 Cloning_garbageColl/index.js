// let obj = {
//     age: 20,
//     ht: 6,
//     wt: 80
// }

// console.log(obj);

// obj.color = "white"

// console.log(obj);



//* Object Cloning //*


let src = {
    age: 20,
    ht: 6,
    wt: 80
}

let dest = {...src};

src.age = 90;

console.log("src: ", src);

console.log("dest: ", dest);


