console.log(document);
console.dir(document);

// let pElementHtml = document.getElementById('pirmas-paragrafas-bloke');
// console.log(pElementHtml);

// let pirmasBlokas = document.querySelector('.pirmas');
// console.log(pirmasBlokas);

// let visiBlokai = document.querySelectorAll('.pirmas');
// console.log(visiBlokai);

// let pirmasParagrafas = document.querySelector('.paragrafas');
// console.log(pirmasParagrafas);

// let pirmasParagrafasBloke = pirmasBlokas.querySelector('.paragrafas');
// console.log(pirmasParagrafasBloke);
// console.log('*********************');

// console.log(
//     pirmasBlokas.nextElementSibling
// );
// console.log(
//     pirmasBlokas.previousElementSibling
// );
// console.log(
//     pirmasBlokas.parentElement
// );
// console.log(
//     pirmasBlokas.parentNode
// );
// console.log('*********************');

// let paragrafas = pirmasBlokas.querySelector('.paragrafas')

// console.log(paragrafas.nextElementSibling)


//  let pirmasBlokas = document.querySelector('.pirmas');
//  console.log(pirmasBlokas.innerHTML);

//  pirmasBlokas.innerHTML = 'pvz';
// pirmasBlokas.innerText = 'pvz';
//  console.log(pirmasBlokas);
let pirmasBlokas = document.querySelector('.pirmas');

let span = document.createElement('span');
span.textContent = 'mano pirmas span';
pirmasBlokas.appendChild(span);


let mygtukas = document.querySelector('.button');

mygtukas.addEventListener('click', (event) => {
    console.log('ivyko click event');
    alert('mano paspaude')
})

mygtukas.addEventListener('mouseenter', (e) => {
    console.log('ivyko mouse enter event')
});

document.addEventListener('keypress', (e) => {
    console.log(e)
})

console.log(mygtukas)




