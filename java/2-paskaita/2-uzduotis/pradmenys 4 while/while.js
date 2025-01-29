console.log('=================================')
console.log('====== console for uzduotys =====')
console.log('=========  1 uzduotis  ==========')
//Išveskite visus skaičius nuo 1 iki 20.
let skaicius = 1;

while (skaicius <= 20) {
    console.log(skaicius);
    skaicius ++;
}

console.log('=========  2 uzduotis  ==========')
// Išveskite visus skaičius nuo 1 iki 50. Prie kiekvieno lyginio skaičiaus parašykite žodį „lyginis“, o prie kiekvieno nelyginio – „nelyginis“.
skaicius = 1;

while (skaicius <= 50) {
    if (skaicius % 2 === 0){
        console.log(skaicius,'lyginis');
        skaicius ++;
    }
    else if(skaicius % 2 !== 0){
        console.log(skaicius,'nelyginis')
        skaicius ++;
    }
}
console.log('=========  3 uzduotis  ==========')
//Išveskite visus skaičius nuo 25 iki 50. Vietoj skaičių, kurie dalinasi iš 3 išveskite tekstą „skaičius {skaičius} dalinasi iš 3“.
skaicius = 25;

while(skaicius < 50){
    console.log(skaicius);
    skaicius++;
    if(skaicius % 3 === 0) {
        console.log('skaicius', skaicius, 'dalinasi is 3')
    }
}

console.log('=========  4 uzduotis  ==========')
//Išvedinėkite visus skaičius nuo 1 iki tol kol pasitaikys skaičius, kuris dalinasi iš 3 ir iš 5.
skaicius = 1;

while (true) {
      console.log(skaicius);
      if (skaicius % 3 === 0 && skaicius % 5 ===0) {
       break;
      }
      skaicius++;

}
console.log('=========  5 uzduotis  ==========')
//Iš skaičių nuo 1 iki 100, raskite visų lyginių skaičių sumą.
skaicius = 1
let suma = 0;
while (skaicius <= 100){
    if(skaicius % 2 === 0){
        suma += skaicius;
        
    }
    skaicius++;

}
console.log(suma)
console.log('=========  6 uzduotis  ==========')
//Žemiau parodytą pavyzdį pakeiskite taip, kad toje pačioje eilutėje išvestų ne tik skaičių, bet ir jo kvadratą:
skaicius = 1;

while (skaicius < 5) {
	console.log(skaicius, skaicius * skaicius);
	skaicius++;
  
}

console.log('=========  7 uzduotis  ==========')
//Išveskite atsitiktinį kiekį atsitiktinių skaičių.
skaicius = 1

while (true){
    skaicius = Math.floor(Math.random() * 11);
    console.log(skaicius);
    if (skaicius === 10){
        break;
    }
    
}
console.log('=========  8 uzduotis  ==========')
//Išveskite atsitiktinį kiekį atsitiktinių skaičių. Raskite šių skaičių sumą.
skaicius = 1
suma = 0
while (true){
    skaicius = Math.floor(Math.random() * 11);
    suma += skaicius; 
    console.log("atsitiktinis skaicius: " + skaicius + " suma: " + suma);
   if (skaicius === 10) {
    break;
   }
    
}

console.log('=========  9 uzduotis  ==========')
//Sukurkite 3 kintamuosius skirtingų prekių kiekiui sekti. Kiekvienos ciklo iteracijos metu bus nupirkti skirtingi ir atsitiktiniai kiekiai šių prekių (gali būti ir nieko nenupirkta: Math.floor(Math.random() * 10) be + 1 dalies). Įsitikinkite, kad nebūtų nupirkta daugiau prekių nei turima inventoriuje. Pardavinėkite tol kol nieko neliks.
let preke1 = 5;
let preke2 = 7;
let preke3 = 3;

while (preke1 > 0 || preke2 > 0 || preke3 > 0) {
   
    let pardavimas1 = Math.floor(Math.random() * 10); 
    let pardavimas2 = Math.floor(Math.random() * 10);
    let pardavimas3 = Math.floor(Math.random() * 10);

    
    if (pardavimas1 > preke1) {
        pardavimas1 = preke1;
    }
    if (pardavimas2 > preke2) {
        pardavimas2 = preke2;
    }
    if (pardavimas3 > preke3) {
        pardavimas3 = preke3;
    }

    
    preke1 -= pardavimas1;
    preke2 -= pardavimas2;
    preke3 -= pardavimas3;

  
    console.log('parduota preke1:',pardavimas1, 'liko:',preke1);
    console.log('parduota preke2:',pardavimas2, 'liko:',preke2);
    console.log('parduota preke3:',pardavimas3, 'liko:',preke3);
}
console.log("viskas parduota");


console.log('=========  10 uzduotis  ==========')
// pakeisti skaiciu atvirkstine tvarka
//   123 -> 321 
// 2 -> 2
//  23 -> 32
//   1234 -> 4321



console.log('=========  11 uzduotis  ==========')
//kavos apratas -> 0.60 eur kavos kaina. Pateikiamas centu skaicius 2.45 eur.
// 1. isvesti kiek grazos 2. kiek kokiu kokie monetu reikia grazinti

let kliento_pinigai = 2.45;
let kavos_kaina = 0.6;
let graza = kliento_pinigai - kavos_kaina;
console.log('graza', graza, 'EUR')
while (kliento_pinigai > kavos_kaina) {
    kliento_pinigai - kavos_kaina
}
console.log('=================================')
