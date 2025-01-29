console.log('******************************')
console.log('********** 1 uzduotis *************')
//Susikurkite skaičių masyvą. Suraskite jame pirmą skaičių (naudojant find metodą), kuris yra lyginis. Pvz, jeigu masyvas bus [3, 7, 2, 9, 6, 4], tai atsakymas turi gautis 2, nes 3 ir 7 buvo nelyginiai.

let skaiciai = [1, 21, 3, 41, 22, 5, 10, 5, 6, 7];


let pirmasLyginis = skaiciai.find(skaicius => skaicius % 2 === 0);


console.log('pirmas lyginis skaicius: ' + pirmasLyginis);

console.log('********** 2 uzduotis *************')
//Susikurkite skaičių masyvą, kuriame būtų teigiamų ir neigiamų skaičių. Suraskite jame pirmą skaičių, kuris yra teigiamas (daugiau nei 0). Pvz, jeigu masyvas bus [-3, 0, 5, -8, 2, 7], atsakymas turi gautis 5.

skaiciai = [-1, -21, 3, 41, -22, 5, 10, -5, 6, -7];

pirmasLyginis = skaiciai.find(skaicius => skaicius > 0);


console.log('pirmas teigiamas skaicius: ' + pirmasLyginis);

console.log('********** 3 uzduotis *************')
//Susikurkite skaičių masyvą, kuriame būtų teigiamų ir neigiamų skaičių. Suraskite jame pirmą skaičių kuris yra neigiamas ir išveskite jo indeksą, o jeigu tokio skaičiaus nėra išveskite -1. Pvz, jeigu masyvas bus [8, -2, 3, 4], tai atsakymas yra 1, nes skaičius -2 yra indekse 1. O jeigu masyvas bus [7, 5, 3], tai atsakymas bus -1, nes masyve nėra neigiamo skaičiaus.

skaiciai = [1, 21, 3, 41, -22, 5, 10, -5, 6, -7];

let pirmasNeigiamas = skaiciai.find(skaicius => skaicius < 0);

console.log('pirmas neigiamas skaicius: ' + pirmasNeigiamas);

pirmasNeigiamas = skaiciai.findIndex(skaicius => skaicius < 0);

console.log('pirmas neigiamo skaicio indeksas: ' + pirmasNeigiamas);

console.log('********** 4 uzduotis *************')
//Susikurkite skaičių masyvą. Suraskite jame pirmą skaičių, kuris yra lygus arba didesnis 10 ir išveskite jo indeksą, o jeigu tokio skaičiaus nėra išveskite -1. Pvz, jeigu turite masyvą [8, 12, 5, 3, 15, 9], atsakymas bus 1.

skaiciai = [1, 21, 3, 41, -22, 5, 10, -5, 6, -7];

let ieskomas = skaiciai.find(skaicius => {
  return skaicius >= 10;
  
})
let indeksas = skaiciai.findIndex(skaicius => skaicius >= 10);

console.log('skaicius didesnis arba lygus desimt:' +ieskomas);
console.log('skaiciaus indeksas:' +indeksas);

console.log('********** 5 uzduotis *************')
//Susikurkite skaičių masyvą. Suraskite jame pirmą skaičių, kuris dalintųsi iš 3 ir būtų didesnis nei 10, ir jį išveskite. Pvz, jeigu masyvas yra [5, 9, 12, 7, 18, 4], atsakymas bus 12.

skaiciai = [1, 21, 3, 41, 22, 5, 10, 5, 6, 7];

let dalinasi = skaiciai.find(skaicius => skaicius % 3 === 0 && skaicius > 10);

console.log('skaicius didesnis uz 10 ir dalinasi is triju: '+dalinasi);


console.log('********** 6 uzduotis *************')
//Susikurkite skaičių masyvą. Suraskite jame pirmą skaičių, kuris yra neigiamas ir yra lyginis. Pvz, jeigu masyvas [5, 8, -3, -6, 4, 7], tai atsakymas yra -6.

skaiciai = [1, 21, 3, 41, -22, 5, 10, -5, 6, -7];

let neigiamasLyginis = skaiciai.find(skaicius => skaicius < 0 && skaicius % 2 === 0);

console.log('skaicius neigiamas ir yra lyginis: ' + neigiamasLyginis);

console.log('********** 7 uzduotis *************')
//Susikurkite skaičių masyvą. Patikrinkite ar šiame masyve visi skaičiai yra teigiami (didesni nei 0). Pvz, jeigu masyvas [7, 5, 9, 8], tai atsakymas true, o jeigu masyvas [8, 9, -3, 2], tai atsakymas false.

skaiciai = [1, 21, 3, 41, -22, 5, 10, 5, -6, 7];

let teigiami = true;

for (let i = 0; i < skaiciai.length; i++){
  if (skaiciai[i] < 0){
    teigiami = false;
    break;
  }
}
console.log('visi skaiciai teigiami: ' + teigiami)
 // antras budas
let masyvas = [1, 21, 3, 41, -22, 5, 10, 5, -6, 7]; 


let visiTeigiami = masyvas.every(x => x > 0);

console.log(visiTeigiami); 

console.log('********** 8 uzduotis *************')
//Susikurkite skaičių masyvą. Patikrinkite ar šiame masyve visi skaičiai yra lyginiai. Pvz, jeigu masyvas yra [2, 4, 8, 6], tai atsakymas true, o jeigu masyvas [7, 3, 6, 8, 10], tai atsakymas false.

skaiciai = [2, 22, 2, 42, 22, 2, 10, 4, 6, 8];

let lyginiai = true;

for (let i = 0; i < skaiciai.length; i++){
  if (skaiciai[i] % 2 !== 0){
    lyginiai = false;
    break;
  }
}
console.log('visi skaiciai lyginiai: ' + lyginiai);

console.log('********** 9 uzduotis *************')
