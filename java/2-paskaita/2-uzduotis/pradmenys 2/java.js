// Duomenys
let darboValandos = 8;

let kepalai = 5;
let darbuotuojai = 10;

let savikaina = 0.89;
let kaina = 1.99;

let iskepti = 500;


console.log('1 uzduotis:')
 console.log('kepalai per diena', kepalai * darbuotuojai * darboValandos);


console.log('2 uzduotis:')
console.log ('visu kepalu savikaina', 5 * 10 * 8 * 0.89, 'EUR') 
console.log ('gautos pajamos', 5 * 10 * 8 * 1.99, 'EUR') 
console.log ('pelnas', (5 * 10 * 8 * 1.99)-(5 * 10 * 8 * 0.89), 'EUR') 


console.log('3 uzduotis:')
if(5 * 10 * 8 >= iskepti) {
    console.log('suspes iskepti')
} else if (kepalai * darbuotuojai *  darboValandos <= iskepti) {
    console.log('nespes iskepti reikiamo kiekio') 
}
console.log(iskepti - (kepalai * darbuotuojai *  darboValandos), 'nespes iskepti') ;
    



console.log('4 uzduotis:')