console.log('******************************')
console.log('********** 1 uzduotis *************')
//Susikurkite masyvą, kuriame būtų pateikti mėgstamiausi valgiai. Pamėginkite masyvą papildyti informacija įvairiais būdais (pridėti naują valgį priekyje, gale, per vidurį, pasirinktoje vietoje). Pamėginkite ištrinti kažkuriuos 3 valgius (iš pasirinktų pozicijų, pvz priekio, galo ir vidurio).

let valgiai = ['pica', 'lazanija', 'sushi', 'karbonadas', ]
console.log(valgiai);
// Pridėti naujus valgius
valgiai.unshift('burgeris');  // Pridedame priekyje
console.log('prideda priekyje burgeris*** '+valgiai);

valgiai.push('pasta');         // Pridedame gale
console.log('prideda gale pasta*** '+valgiai);

valgiai.splice(3, 0, 'kepsnys'); // Pridedame į vidurį (pozicija 3)
console.log('prideda viduryje kepsnys*** '+valgiai);

// Ištrinti 3 valgius
valgiai.shift();    // Pašalinti pirmąjį elementą
console.log('pasalina pirma elementa*** '+valgiai);

valgiai.pop();      // Pašalinti paskutinį elementą
console.log('pasalina paskutini elementa*** '+valgiai);

valgiai.splice(2, 1); // Pašalinti vidurinį elementą
console.log('pasalina vidurini elementa*** '+valgiai);

console.log(valgiai);
console.log('********** 2 uzduotis *************')
//Susikurkite skaičių masyvą. Naudojant includes, patikrinkite ar masyve yra kuris nors pasirinktas skaičius (pvz 8).

let skaiciai = [28, 40, 60, 80];

let skaiciaiYra = skaiciai.includes(40);

console.log(skaiciaiYra);
let skaiciaiIndex= skaiciai.indexOf(28)
console.log('skaiciaus 28 indekso skaicius '+skaiciaiYra);
console.log('********** 3 uzduotis *************')
//Susikurkite masyvą, kuriame būtų surašyti bet kokie žodžiai. Panaudokite join metodą, kad masyvą paverstumėte į teksto eilutę. Paeksperimentuokite su skirtingais skirtukais jungiant tekstą (pvz vieną kartą panaudokite tarpą, kitą kablelius ir t.t.).

let zodziai = ['saulė', 'žvaigždės', 'mėnulis', 'dangaus', 'mėlynas'];

// Jungiam su tarpu
let suTarpais = zodziai.join(' ');
console.log(suTarpais);  // "saulė žvaigždės mėnulis dangaus mėlynas"

// Jungiam su kableliu
let suKableliais = zodziai.join(', ');
console.log(suKableliais);  // "saulė, žvaigždės, mėnulis, dangaus, mėlynas"

// Jungiam su brūkšniu
let suBruksniais = zodziai.join('-');
console.log(suBruksniais); 


let suIr = zodziai.join(' ir ');
console.log(suIr);  

console.log('********** 4 uzduotis *************')
//Susikurkite pažymių masyvą. Surikiuokite pažymius nuo didžiausio iki mažiausio. Išveskite tris didžiausius pažymius

let pazymiai = [2, 10, 5, 3, 8, 8, 4, 5, 9];


pazymiai.sort((a, b) => b - a);


let trysDidziausi = pazymiai.slice(0, 3);

console.log("tris didziausi pazymiai: "+ trysDidziausi);

console.log('********** 5 uzduotis *************')
//Susikurkite du masyvus, pirmąjame būtų saugomi biologijos pamokos studentų vardai, o antrąjame būtų saugojami matematikos pamokos studentų vardai. Apjunkite šiuos masyvų informaciją į vieną masyvą. 

let biologija = ['Ignas', 'Povilas', 'Edgaras', 'Viktorija'];
let matematika = ['Ieva', 'Auguste', 'Ramune', 'Tomas'];


let visiStudentai = [...biologija, ...matematika];

console.log(visiStudentai);

console.log('********** 6 uzduotis *************')
//Susikurkite du masyvus. Pirmame masyve bus išvardinta pirmo semestro paskaitų temos, o antrame masyve - antro semestro paskaitų temos. Sujunkite šiuos masyvus naudojant spread operator, taip, kad pirmiausia būtų pateikta pirmo semestro informacija ir tada antro.


let pirmasSemestras = ['Ivadas i programavima', 'Matematika 1', 'Fizika', 'Chemines medziagos', 'Anglu kalba'];


let antrasSemestras = ['Duomenu strukturos', 'Matematika 2', 'Elektronika', 'Programavimo kalbos', 'Ekonomika'];

let abuSemestrai = [...pirmasSemestras, ...antrasSemestras];

console.log(abuSemestrai);

console.log('********** 7 uzduotis *************')
//Susikurkite masyvą, kuriame būtų išvardintos kelios spalvos. Padarykite šio masyvo kopiją ir duomenis iš originalaus masyvo pašalinkite. Išveskite abu masyvus, atkreipkite dėmesį į tai kad pašalinus duomenis iš pirmojo masyvo, turėjo pasinaikinti tik iš jo, o antrame viskas likti tvarkingai, o jeigu išsitrynė abiejų duomenys - pamėginkite surasti priežastį ir sutvarkyti.

let spalvos = ['raudona', 'zalia', 'geltona', 'juoda', 'balta'];

let spalvosKopija = spalvos.slice();

spalvos.splice(0, 5);

console.log("Originalus masyvas: "+ spalvos);
console.log("Masyvas kopija: "+ spalvosKopija);

console.log('********** 8 uzduotis *************')
//Susikurkite masyvą, kuriame būtų saugomi miestų pavadinimai. Atlikite paiešką masyve su indexOf surasdami kurioje pozicijoje yra pasirinktas miestas.

let miestai = ['Vilnius', 'Kaunas', 'Klaipeda', 'Siauliai', 'Panevėzys'];

let pozicija = miestai.indexOf('Vilnius');

console.log("Vilniaus indeksas: "+ pozicija);

console.log('********** 9 uzduotis *************')
//Susikurkite bet kokį masyvą. Parašykite programą kuri išsiaiškintų ar masyve yra bent vienas dublikatas.
//Pvz, masyve [1, 2, 3] nėra dublikatų.
//O masyve [1, 2, 3, 4, 2] yra dublikatų (skaičius 2).


let masyvas = [1, 2, 3, 4, 2]; 

let yraDublikatu = false;
let dublikatas = 0;

for (let i = 0; i < masyvas.length; i++){
  if (masyvas.indexOf(masyvas[i], i + 1) !== -1){
    dublikatas = masyvas[i];
    yraDublikatu = true
    break;
  }
}

if (yraDublikatu) {
  console.log('Masyve yra dublikatas: ', dublikatas);
} else {
  console.log('Masyve nera dublikatu');
}

console.log('********** 10 uzduotis *************')

let senasMasyvas = [1, 2, 3, 4, 5, 6];
let naujasMasyvas = [];
let naujoMasyvoKiekis = Math.ceil(senasMasyvas.length / 2);

for (let i = 0; i < naujoMasyvoKiekis; i++){
  naujasMasyvas.push([
    senasMasyvas[i * 2], 
    senasMasyvas[i * 2 + 1]
  ]);
}
console.log(naujasMasyvas);

console.log('********** 11 uzduotis *************')
//Susikurkite du skaičių masyvus. Susikurkite trečią, tačiau tuščią masyvą. Parašykite programą kuri sudėtų pirmų dviejų masyvų skaičius į trečiąjį, tačiau nekartojant jau trečiame egzistuojančių reikšmių (sudėtų tik unikalius skaičius). Pvz jeigu turime masyvus [1, 2, 3, 4] ir [2, 3, 5, 6], tai trečiasis turėtų gautis [1, 2, 3, 4, 5, 6].

let pirmasMasyvas = [2, 6, 8, 1, 10, 6, 11];
let antrasMasyvas = [12, 22, 62, 1, 11, 6, 2];
let treciasMasyvas = [];

for (let i = 0; i < pirmasMasyvas.length; i++){
  if (!treciasMasyvas.includes(pirmasMasyvas[i])){
    treciasMasyvas.push(pirmasMasyvas[i]);
  }
}

for (let i = 0; i < antrasMasyvas.length; i++){
  if (!treciasMasyvas.includes(antrasMasyvas[i])){
    treciasMasyvas.push(antrasMasyvas[i]);
  }
}
console.log(treciasMasyvas);