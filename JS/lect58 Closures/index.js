

// let name = "Arpit";
// function outerFunction(){
//     let name = "Sameer"; //let block-scoped
//     function innerFunction(){
//         // let name = "Kuna";
//         console.log(name);
//     }
//     innerFunction();
// }
// outerFunction();





// function outer(){
//     let value = 5;
//     {
//         function inner(){
//             console.log(value);
            
//         }
//         inner()
//     }
// }
// outer();




function outerFunction(){
    let name = "Sameer"; 
    function innerFunction(){
        console.log(name);
    }
    return innerFunction;
}
let inner = outerFunction();

inner();
