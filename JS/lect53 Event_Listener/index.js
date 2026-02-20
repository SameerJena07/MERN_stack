
// function changeText(event){
//     console.log(event);
    
//     let fpara = document.getElementById('fpara');
//     fpara.textContent = "Sameer";

// }

// let fpara = document.getElementById('fpara');

// fpara.addEventListener('click', changeText);

// fpara.removeEventListener('click', changeText);




// OR //

// let fpara = document.getElementById('fpara');

// fpara.addEventListener('click', function() {
//     let fpara = document.getElementById('fpara');
//     fpara.textContent = "Sameer";
// });



/****/


// let anchorElement = document.getElementById('fanchor');

// anchorElement.addEventListener('click', function(event){
//     event.preventDefault();
//     anchorElement.textContent = "Click done bhai"
// })


/***/


// let paras = document.querySelectorAll('p');

// function alertPara(event){
//     alert("You have clicked on para: " + event.target.textContent);
// }

// for (let i=0; i<paras.length; i++){
//     let para = paras[i];
//     para.addEventListener('click', alertPara);
// }



/***/


// let mydiv = document.getElementById('wrapper');

// function alertPara(event){
//     alert("You have clicked on para: " + event.target.textContent);
// }

// mydiv.addEventListener('click', alertPara);



/***/


let mydiv = document.getElementById('wrapper');

function alertPara(event){
    if(event.target.nodeName === 'SPAN') {
        alert("You have clicked on para: " + event.target.textContent);
    }
    
}

mydiv.addEventListener('click', alertPara);