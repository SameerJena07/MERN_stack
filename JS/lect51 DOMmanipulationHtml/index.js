
let mydiv = document.querySelector('#mydiv');

let newElement = document.createElement('span');
newElement.textContent = "This is me sameer";

mydiv.insertAdjacentElement('afterend', newElement);


