//kavos apratas -> 0.60 eur kavos kaina. Pateikiamas centu skaicius 2.45 eur.
// 1. isvesti kiek grazos 2. kiek kokiu  monetu reikia grazinti: monetos 50, 20, 10, 1

let kliento_pinigai = 2.45;
let kavos_kaina = 0.6;
let graza = kliento_pinigai - kavos_kaina;

console.log('graza', graza, 'EUR');
//antras budas
let graza2 = 0;
if (kliento_pinigai > kavos_kaina){
    graza2 = kliento_pinigai - kavos_kaina;
}
console.log('graza2', graza2, 'EUR');
// antro uzdavinio sprendimas be ciklu
graza = 0
if  (graza > 0) {
    let moneta50 = Math.floor(graza / 0.5);
    let moneta20 = Math.floor((graza - moneta50 * 0.5) / 0.2);
    let moneta10 = Math.floor((graza - moneta50 * 0.5 - moneta20 * 0.2) / 0.1);
    let moneta1 = Math.floor((graza - moneta50 * 0.5 - moneta20 * 0.2 - moneta10 * 0.1) / 0.01);
}
console.log ('50:', moneta50);
console.log ('20:', moneta20);
console.log ('10:', moneta10);
console.log ('1:', moneta1);
console.log('********************************************')

// antro uzdavinio sprendimas su ciklu

moneta50 = 0;
moneta20 = 0;
moneta10 = 0;
moneta1 = 0;
graza *= 100;
while (graza > 0){
    if(graza >= 50){
        moneta50++;
        graza -= 50;
    } else if(graza >= 20){
        moneta20++;
        graza -= 20;
} else if(graza >= 10){
    moneta10++;
    graza -= 10;
} else if(graza >= 0){
    moneta1++;
    graza -= 1;
}
}
console.log ('50:', moneta50);
console.log ('20:', moneta20);
console.log ('10:', moneta10);
console.log ('1:', moneta1);