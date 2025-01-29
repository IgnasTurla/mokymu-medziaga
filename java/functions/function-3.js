console.log('******** 1 uzduotis *********');
//Susikurkite funkciją, kuri per argumentus priimtų žodžių masyvą. Funkcijoje išveskite visus žodžius iš masyvo atskirose eilutėse, nurodant žodžio ilgį (simbolių kiekį). Už funkcijos ribų susikurkite žodžių masyvą ir užpildykite jį duomenimis. Iškvieskite sukurtą funkciją perduodant turimą masyvą.

function isvestiZodzius(zodziai) {
    for (let i = 0; i < zodziai.length; i++) {
      console.log(`${zodziai[i]}: ${zodziai[i].length} simboliai`);
    }
  }
  
  
  let zodziai = [
    "obuolys", 
    "bananas", 
    "kivi", 
    "greipfrutas", 
    "mangos"
];
  
  
  isvestiZodzius(zodziai);

  console.log('******** 2 uzduotis *********');
//Susikurkite funkciją, kuri per argumentus priimtų skaičių masyvą. Funkcija turėtų atspausdinti visus skaičius, šalia jų išvedant to skaičiaus kvadratą ir jį padalintą iš dviejų. Už funkcijos ribų susikurkite du skaičių masyvus ir užpildykite jį duomenimis. Iškvieskite funkciją du kartus, kiekvieną kartą perduodant skirtingą turimą masyvą.

function isvestiSkaicius(skaiciai){
     for(let item of skaiciai){
        let skaicius = item;
        let kvadratas = skaicius * skaicius;
        let dalyba = skaicius / 2;
        console.log('************')
        console.log(`Skaicius: ${skaicius}, Kvadratas: ${kvadratas}, Padalinta is dvieju: ${dalyba}`)
     }
}

let masyvas1 = [1, 7, 3, 9, 44, 24];
let masyvas2 = [2, 17, 66, 3, 4, 12];

isvestiSkaicius(masyvas1);
isvestiSkaicius(masyvas2);
console.log('******** 3 uzduotis *********');
//Susikurkite funkciją, kuri per argumentus priimtų pažymių masyvą, bei studento vardą su pavarde. Funkcija turėtų išvesti studento vardą ir pavardę, jo pažymius. Taip pat, suskaičiuoti vidurkį, bei jį išvesti. Už funkcijos ribų susikurkite reikiamus kintamuosius ir masyvus, arba objektus studentų pažymiams saugoti ir užpildykite juos duomenimis. Iškvieskite šią funkciją perduodant visus reikalingus duomenis.

function studentoInformacija(pazymiai, vardas, pavarde){
    console.log(`Studento Vardas: ${vardas} Studento Pavarde: ${pavarde}`)
    console.log('Pazymiai: ' + pazymiai.join(", "))
    
    let suma = 0;
    for (let i of pazymiai.length){
        suma += pazymiai[i];
    }
    let vidurkis = suma / pazymiai.length;

    console.log('Vidurkis:'  + vidurkis.toFixed(2));
}

let studentas = [
    {vardas: 'Jonas', pavarde: 'Jonaitis', pazymiai: []}
]

console.log('******** 3 uzduotis *********');
//Susikurkite funkciją, kuri per argumentus priimtų skaičių masyvą. Funkcija turėtų rasti didžiausią skaičių iš masyvo bei išvesti gautą atsakymus. Taip pat, susikurkite funkciją, kuri per argumentus priimtų masyvą ir į jį sugeneruotų pasirinktą kiekį atsitiktinių skaičių. Susikurkite tris tuščius masyvus. Iškvieskite atsitiktinių skaičių generavimo funkciją tris kartus, kiekvieną kartą perduodant funkcijai vis kitą masyvą. Kai duomenys bus užpildyti, masyvuose esančią informaciją išsiveskite norimu būdu (per console.log arba per dar atskirą funkciją). Tuomet kvieskite didžiausio skaičiaus paieškos funkciją tris kartus, kiekvieną kartą perduodant skirtingą masyvą į ją.

function isvestiSkaicius(masyvas){

}

let skaiciai = [2, 66, 3, 123, 9, 0, 2, 43, 7, 4, 52]