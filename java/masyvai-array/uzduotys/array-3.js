console.log('******************************')
console.log('********** 1 uzduotis *************')
//Susikurkite bet kokių žodžių masyvą ir užpildykite jį duomenimis. Išveskite visus žodžius su indeksais į atskiras eilutes. Pvz: 0 - medis, 1 - tvora, …

let zodziai = ["medis", "tvora", "paukštis", "upė", "kalnas"];


for (let zodis of zodziai) {
    console.log(zodis);
}
console.log('******************************')
console.log('********** 2 uzduotis *************')
//Susikurkite masyvą pirkinių sąrašui saugoti ir užpildykite jį duomenimis. Išveskite kiek pirkinių yra šiame sąraše. Taip pat, išveskite kiekvieną įrašą atskiroje eilutėje, prieš kiekvieną parašant brūkšniuką ar kokį kitą skirtuką.
let pirkiniuSarasas = ["obuoliai", "miltai", "pienas", "kava", "duona"];

console.log("Pirkinių sąrašas turi " + pirkiniuSarasas.length + " prekes.");

for (let pirkimas of pirkiniuSarasas) {
    console.log("- " + pirkimas);
}
console.log('******************************')
console.log('********** 3 uzduotis *************')
//Susikurkite masyvą studento pažymiams saugoti. Užpildykite šį masyvą duomenimis. Raskite pažymių vidurkį. Išveskite visus šiuos pažymius ir gautą vidurkį.
let pazymiai = [9, 7, 8, 10, 6];

let suma = 0;


for (let pazymys of pazymiai) {
    suma += pazymys;  // Pridedame pažymį prie sumos
   
}


let vidurkis = suma / 5;


console.log("Studento pažymiai:");
for (let pazymys of pazymiai) {
    console.log("- " + pazymys);
}


console.log("Vidurkis: " + vidurkis);

console.log('******************************')
console.log('********** 4 uzduotis *************')
//Susikurkite masyvą kelionės nuovažiuotiems kilometrams saugoti ir užpildykite jį duomenimis (pvz 120, 145, 90 ir pan., kur kiekvienas skaičius reiškia kiek km kurią dieną buvo nuvažiuota). Išveskite visus nuvažiuotus per dieną kilometrus, kurie yra didesni nei 150.

let nuvaziuotiKilometrai = [120, 145, 90, 160, 175, 140, 200, 420];


for (let daugiau in nuvaziuotiKilometrai) {
    if (nuvaziuotiKilometrai[daugiau] > 150) {
        console.log('daugiau negu 150 kilometru: '+nuvaziuotiKilometrai[daugiau ] + " km");
    }
}
console.log('******************************')
console.log('********** 5 uzduotis *************')
console.log('******************************')
console.log('********** 6 uzduotis *************')
console.log('******************************')
console.log('********** 7 uzduotis *************')
console.log('******************************')
console.log('********** 8 uzduotis *************')
console.log('******************************')
console.log('********** 9 uzduotis *************')

let studentsGrades = [];
for (let i = 0; i < 30; i++) {  // 30 pažymių
  studentsGrades.push(Math.floor(Math.random() * 10) + 1);  // Atsitiktiniai pažymiai nuo 1 iki 10
}

// Apskaičiuojame vidurkį
let sum = 0;
for (let grade of studentsGrades) {
  sum += grade;
}
let average = sum / studentsGrades.length;

// Raskime neigiamų pažymių kiekį (mažesnių nei 4)
let negativeCount = 0;
for (let grade of studentsGrades) {
  if (grade < 4) {
    negativeCount++;
  }
}

// Išvedame visus teigiamus pažymius
let positiveGrades = [];
for (let grade of studentsGrades) {
  if (grade > 4) {
    positiveGrades.push(grade);
  }
}


console.log("Teigiami pažymiai:", positiveGrades);
console.log("Vidurkis:", average);
console.log("Neigiamų pažymių kiekis:", negativeCount);
console.log('******************************')
console.log('********** 10 uzduotis *************')

let pirmasStudentas = [8, 9, 7, 6, 10, 5, 1, 9, 2, 1];
let antrasStudentas = [5, 6, 7, 4, 8, 2, 6, 1, 3, 9];

// pirmo vidurkis
suma = 0;
for (let pazimiai of pirmasStudentas) {
  suma += pazimiai;
}
vidurkis = suma / pirmasStudentas.length;

// antro vidurkis
let suma2 = 0;
for (let pazimiai2 of antrasStudentas) {
  suma2 += pazimiai2;
}
let vidurkis2 = suma2 / antrasStudentas.length;


console.log("Studento 1 pažymiai:", pirmasStudentas);
console.log("Studento 1 vidurkis:", vidurkis.toFixed(1));
console.log("Studento 2 pažymiai:", antrasStudentas);
console.log("Studento 2 vidurkis:", vidurkis2);


if (vidurkis > vidurkis2) {
  console.log("Studentas 1 turi didesnį vidurkį.");
} else if (vidurkis < vidurkis2) {
  console.log("Studentas 2 turi didesnį vidurkį.");
} else {
  console.log("Abu studentai turi vienodą vidurkį.");
}
console.log('******************************')

