
function changeText(event){
    console.log(event);
    
    let fpara = document.getElementById('fpara');
    fpara.textContent = "Sameer";

}

let fpara = document.getElementById('fpara');

fpara.addEventListener('click', changeText);

// fpara.removeEventListener('click', changeText);




// OR //

// let fpara = document.getElementById('fpara');

// fpara.addEventListener('click', function() {
//     let fpara = document.getElementById('fpara');
//     fpara.textContent = "Sameer";
// });