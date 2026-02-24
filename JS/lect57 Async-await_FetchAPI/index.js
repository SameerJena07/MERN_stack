
// async function getData (){
//     setTimeout(function (){
//         console.log("I am Inside set timeout block");
//     }, 3000);
// }

// getData();


/// await ///

///Fetch API///



// async function getData(){

//     //get request - async
//     let response = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');

//     //parse JSON - async
//     let data = await response.json();

//     console.log(data);
    
// }
// getData();

//Scenario:
// prepare URL / API endpoint -> sync
// fetch data -> network call -> async
// process data -> sync




const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const url = "https://jsonplaceholder.typicode.com/posts";

const options = {
    method: "POST",
    body: JSON.stringify({username: "Sameer Jena"}),
    headers: myHeaders,
};

async function getData(){
    const URL = "https://dummyjson.com/posts";
    const response = await fetch(url);
    let data = await response.json();
    console.log("get data response: ", data);
}

async function postData(){
    const response = await fetch("https://dummyjson.com/posts/add", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify( {
            title: "Sammer Jena -> i am in love with someone",
            userId: 5,
        }) 
    });
    
    let data = await response.json();
    console.log("Post data responce: ", data);
        
}

async function processData(){
    await postData();
    await getData();
}
processData();

