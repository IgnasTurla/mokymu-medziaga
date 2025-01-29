console.log('******** 1 uzduotis *********');
//Sukurkite funkciją, kuri išvestų jūsų vardą ir kodėl pasirinkote programavimą. Iškvieskite šią funkciją tris kartus.

function mano(){
    console.log('Vardas: Ignas');
    console.log('kodėl pasirinkote programavimą: todel ir todel');
}

for (let i = 0; i < 3; i++){
    mano();
}


console.log('******** 2 uzduotis *********');
//Sukurkite funkciją, kuri išvestų 5 eilučių eilėraštį. Iškvieskite šią funkciją 5 kartus.

function eilerastis(){
    console.log('Eglute skarota')
    console.log('Eglute zalia')
    console.log('Padejo bombike')
    console.log('Eglutes')
    console.log('Nera')
    console.log('********************')
}

for (let i = 0; i < 5; i++){
    eilerastis();
}

console.log('******** 3 uzduotis *********');
//Sukurkite tris funkcijas, kur kiekviena išvestų skirtingus tekstus. Iškvieskite visas tris funkcijas po vieną kartą.

function pirma(){
    console.log('pirma')
};

function antra(){
    console.log('antra')
};

function trecia(){
    console.log('trecia')
};

pirma();
antra();
trecia();

console.log('******** 4 uzduotis *********');
//Sukurkite dvi funkcijas, kur vienoje būtų viena teksto eilutėje, kitoje kita. Sukurkite trečią funkciją, kuri iškviestų pirmas dvi funkcijas. Iškvieskite šią trečiąją funkciją už visų funkcijų ribų.


function pirmas(){
    console.log('pirmas iskviestas per trecia')
};

function antras(){
    console.log('antras iskviestas per trecia')
};

function trecias(){
    pirmas()
    antras()
};

trecias();

console.log('******** 5 uzduotis *********');
//Sukurkite funkciją, kurios viduje sugeneruotumėte du atsitiktinius skaičius. Funkcijoje suskaičiuokite ir išveskite šių dviejų skaičių sumą, kartu išvedant ir patį atliekamą veiksmą (pvz 7 + 2 = 9). Iškvieskite šią funkciją keletą kartų.

function skaiciai(){

    let skaicius1 = Math.floor(Math.random() * 10) + 1;
    let skaicius2 = Math.floor(Math.random() * 10) + 1;
    let suma = skaicius1 + skaicius2;
    console.log(`atsitiktinis skaicius: ${skaicius1}`);
    console.log(`atsitiktinis skaicius: ${skaicius2}`);
    console.log(`atsitiktiniu skaiciu suma: ${skaicius1} + ${skaicius2} = ${suma}`);
    
}


for (let i = 0; i < 3; i++){
    skaiciai();
};

console.log('******** 6 uzduotis *********');
//Sukurkite ir iškvieskite funkciją, kurioje kintamuosiuose būtų saugoma informacija apie policininką (vardas, pavardė, amžius, alga, etatas, specializacija). Išveskite šią informaciją suformatuotai (pavyzdžiui įterpkite į sakinį, ar išveskite sąrašu ar pan.)

function policininkas(){
    let vardas = 'Robotas';
    let pavarde = 'Policininkas';
    let amzius = 100;
    let alga = 777;
    let etatas = 'Pilnas';

    console.log(`Policininko vardas ir pavarde: ${vardas} ${pavarde}`);
    console.log(`Amzius: ${amzius} metai`);
    console.log(`Alga: €${alga}`);
    console.log(`Etatas: ${etatas}`);
   
}

policininkas();

console.log('******** 7 uzduotis *********');
//Sukurkite funkciją, kuri išvestų 10 atsitiktinių skaičių vienoje eilutėje, skaičius atskiriant tarpu. Šią funkciją iškvieskite 5 kartus.

function daugKartu() {
    let atsitiktiniaiSkaiciai = [];
    for (let i = 0; i < 10; i++) {
        atsitiktiniaiSkaiciai.push(Math.floor(Math.random() * 10) + 1);
    }
    console.log(atsitiktiniaiSkaiciai.join(" ")); 
}


for (let i = 0; i < 5; i++) {
    daugKartu();
};
console.log('******** 8 uzduotis *********');
//Sukurkite funkciją, kuri išvestų atsitiktinį skaičių. Už funkcijos ribų sukurkite ciklą, kurį būtų vykdomas 10 kartų. Iškvieskite sukurtą funkciją cikle. Turėtumėte pamatyti 10 atsitiktinių skaičių.

