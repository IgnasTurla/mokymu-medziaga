console.log('******** 1 uzduotis *********');
//Susikurkite funkciją kuri priimtų skaičių masyvą per argumentus. Ši funkcija turėtų rasti duotųjų skaičių sumą ir grąžinti gautą atsakymą. Už funkcijos ribų susikurkite du skaičių masyvus ir užpildykite juos duomenimis. Iškvieskite turimą funkciją du kartus, jai abu kartus perduodant skirtingą masyvą. Gautus atsakymus išveskite. Taip pat, raskite kuri suma gavosi didesnė ir išveskite atsakymą.

function sumosFunkcija(masyvas){
  let suma = 0;
  for (let skaicius of masyvas){
    suma += skaicius;
  }
  return suma;
}


let skaiciai1 = [2, 7, 3, 9, 12, 54, 17];
let skaiciai2 = [6, 2, 3, 19, 21, 33, 1];

let suma1 = sumosFunkcija(skaiciai1);
let suma2 = sumosFunkcija(skaiciai2);

console.log(`pirmo masyvo suma: ${suma1}`);
console.log(`pirmo masyvo suma: ${suma2}`);

if (suma1 > suma2){
  console.log(`pirmo masyvo suma didesne: ${suma1}`);
} else if (suma1 < suma2){
  console.log(`antro masyvo suma didesne: ${suma2}`);
} else {
  console.log(`abu masyvai vienodi`)
}

console.log('******** 2 uzduotis *********');
//Susikurkite funkciją kuri per argumentus priimtų žodžių masyvą. Ji turėtų rasti ir grąžinti ilgiausią žodį masyve. Už funkcijos ribų susikurkite žodžių masyvą. Iškvieskite funkciją perduodant jai žodžių masyvą. Gautą atsakymą išveskite, taip pat, nurodykite šio žodžio ilgį.

function rastiIlgiausia(zodziai){
    let ilgiausiasZodis = '';
    for (let zodis of zodziai){
      if (zodis.length > ilgiausiasZodis.length){
        ilgiausiasZodis = zodis;
      }
    }
    return ilgiausiasZodis;
}

let zodziai = ['obuolys', 'berzas', 'agurkai', 'raudonikis', ];
let ilgiausias = rastiIlgiausia(zodziai);

console.log(`visi zodziai: ${zodziai}, o ilgiausias zodis: ${ilgiausias} = ${ilgiausias.length}`);

console.log('******** 3 uzduotis *********');
//Susikurkite funkciją kuri per argumentus priimtų pažymių masyvą. Ji turėtų patikrinti ar visi pažymiai teigiami: jei visi teigiami turėtų grąžintų true kaip atsakymą, o jei yra bent vienas neigiamas - false. Susikurkite du pažymių masyvus. Iškvieskite šią funkciją du kartus, abu kartus perduodant skirtingus masyvus. Gautus atsakymus paverskite į tekstą (jeigu gavote true - išveskite tekstą 'visi studento pažymiai teigiami', jei false - 'studentas turi bent vieną neigiamą pažymį'). Šiam iškonvertavimui iš true/false į tekstą galite pamėginti pasikurti atskirą funkciją, jai perduoti kitos funkcijos atsakymą.

function pazymiuFunkcija(pazymiai){
  return pazymiai.every(pazimys => pazimys > 4)
  // /for (let pazimys of pazymiai){
  //   if (pazimys < 4){
  //     return false;
  //   }
  // }
  // return true;
}

let pazymiai1 = [5, 5, 8, 5, 5, 6, 5, 10]
let pazymiai2 = [10, 1, 8, 9, 3, 7, 3, 9]
let rezultatas1 = pazymiuFunkcija(pazymiai1);
let rezultatas2 = pazymiuFunkcija(pazymiai2);

console.log(pazymiai1 + " " + rezultatas1);
console.log(pazymiai2 + " " + rezultatas2);

if (rezultatas1) {
  console.log("Visi studento pazymiai teigiami");
} else {
  console.log("Studentas turi neigiama pazymi");
}

if (rezultatas2) {
  console.log("Visi studento pazymiai teigiami");
} else {
  console.log("Studentas turi neigiama pazymi");
}
