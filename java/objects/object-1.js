console.log('********* 1 uzduotis *********')
//Sukurkite objektą studento duomenims saugoti. Į šį objektą sudėkite tokias savybes su reikšmėmis: vardas, pavardė, amžius, studijų programa, atsiskaitytų kreditų skaičius, pažymiai, ūgis, kelintame kurse mokosi, kurioje mokykloje mokosi. Šiuos duomenis galite grupuoti į vidinius objektus arba visus išrašyti atskirai. Išveskite šią informaciją per vieną console.log(). Taip pat, pamėginkite išvesti atskirose eilutėse tris skirtingas pasirinktas savybes.

let objektas = {
    vardas: 'Ignas',
    pavarde: 'Turla',
    amzius: 32,
    studijos: {
        studijuPrograma: 'JavaScript',
        kreditai: 55,
        paymiai: [3, 2, 8, 1, 9, 5, 7],
    },
    ugis: '184cm',
}
console.log(objektas);
console.log(objektas['vardas']);
console.log('********* 2 uzduotis *********')
//Sukurkite objektą informacijai apie filmą saugoti. Į šį objektą sudėkite tokias savybes su reikšmėmis: pavadinimas, režisierius, biudžetas, kiek uždirbo pinigų po išleidimo, žanras, trukmė, išleidimo metai, aktorių sąrašas (masyvas su jų vardais ir pavardėmis). Išveskite šio objekto informaciją. Paskaičiuokite ir išveskite šio filmo pelną (uždarbis - biudžetas). Išveskite kiek filme dalyvavo aktorių (jų kiekis). Paskaičiuokite kiek filmui yra metų (dabartinius metus tiesiog galite įrašyti rankomis arba panaudoti new Date(Date.now()).getFullYear() funkciją).


let filmas = {
    pavadinimas: "Inception",
    rezisierius: "Christopher Nolan",
    biudzetas: 160000000, 
    uzdarbisPoIsleidimo: 829895144, 
    zanras: ["Science Fiction", "Action", "Thriller"],
    trukme: 148, 
    isleidoMetai: 2010,
    aktoriai: [
      { vardas: "Leonardo", pavarde: "DiCaprio" },
      { vardas: "Joseph", pavarde: "Gordon-Levitt" },
      { vardas: "Elliot", pavarde: "Page" },
      { vardas: "Tom", pavarde: "Hardy" },
      { vardas: "Marion", pavarde: "Cotillard" }
    ]
  };
  console.log(filmas);
let pelnas = filmas.uzdarbisPoIsleidimo - filmas.biudzetas;
console.log('pelnas: ' + pelnas+' USD')
console.log('aktoriu kiekis: '+filmas.aktoriai.length);

let metai = new Date(Date.now()).getFullYear() - filmas.isleidoMetai;
console.log('metai: ' + metai);

console.log('********* 3 uzduotis *********');
