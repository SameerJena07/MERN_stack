
// async function getData (){
//     setTimeout(function (){
//         console.log("I am Inside set timeout block");
//     }, 3000);
// }

// getData();


/// await ///

///Fetch API///

async function getData(){

    //get request - async
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');

    //parse JSON - async
    let data = await response.json();

    console.log(data);
    
}
getData();

//Scenario:
// prepare URL / API endpoint -> sync
// fetch data -> network call -> async
// process data -> sync

