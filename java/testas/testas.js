console.log('********* 1 uzduotis ***********')
// Sukurkite funkciją, kuri paverstų eurus į dolerius.
// Sugeneruokite atsitiktinį skaičių (eurų sumą) nuo 1 iki 1000.
// Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
// doleriais.

function eurai_doleriai(eurai){
    let dolerioKursas = 0.86;
    return eurai * dolerioKursas;

};

let atsitiktiniaiEurai = Math.floor(Math.random() * 1000) + 1;

console.log('Eurai: ' + atsitiktiniaiEurai)
console.log('Eurai i Dolerius: ' + eurai_doleriai(atsitiktiniaiEurai).toFixed(2));

console.log('********* 2 uzduotis ***********');
// Sukurkite funkciją, kuri paverstų dolerius į eurus.
// Sugeneruokite atsitiktinį skaičių (dolerių sumą) nuo 1 iki 1000.
// Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
// eurais.

function eurai_doleriai(doleriai){
    let euroKursas = 1.16;
    return doleriai * euroKursas;

}

let atsitiktiniaiDoleriai = Math.floor(Math.random() * 1000) + 1;

console.log('Doleriai: ' + atsitiktiniaiDoleriai);
console.log('Doleriai i Eurus: ' + eurai_doleriai(atsitiktiniaiDoleriai).toFixed(2));

console.log('********* 3 uzduotis ***********');
// Parašykite programą, kuri suskaičiuotų žmogaus BMI (body
// mass index), kai yra žinomas žmogaus ūgis ir svoris.

function skaiciuotiBMI(svoris, ugis) {
    
    let bmi = svoris / (ugis * ugis);
    return bmi; 
}
let svoris = 70;  
let ugis = 1.75; 
let bmi = skaiciuotiBMI(svoris, ugis);

console.log(`Svoris: ${svoris}Kg. Ugis: ${ugis}M. Kuno mases indekas yra:  ${bmi.toFixed(2)}`)

console.log('********* 4 uzduotis ***********');
// Parašykite programą, kuri iš duoto žmogaus amžiaus metais
// pasakytų kiek tai yra sekundėmis, minutėmis, valandomis,
// dienomis.

function skaiciuotiAmziu(amzius){
    let dienosPerMetus = 365;

    let sekundemis = 24 * 60 * 60 * dienosPerMetus;
    let minutemis = sekundemis / 60;
    let valandomis = minutemis / 60;
    let dienomis = dienosPerMetus * amzius

    return{
        sekundemis,
        minutemis,
        valandomis,
        dienomis,
    }
}

let zmogausAmzius = 19;
let reiksme = skaiciuotiAmziu(zmogausAmzius);
console.log('Zmogaus Metai: ' + zmogausAmzius);
console.log('Sekundemis: ' + reiksme.sekundemis);
console.log('Minutemis: ' +reiksme.minutemis);
console.log('Valandomis: ' +reiksme.valandomis);
console.log('Dienomis: ' +reiksme.dienomis);

console.log('********* 5 uzduotis ***********');
// Parašykite programą, kuri konvertuos termometro
// duomenis iš Farenheito į Celsijų, ir atvirkščiai.

console.log('===== Is celsijaus i farenheitus =====');
function cel_far(celsijai){
    return  farenheitas = (celsijai * 9/5) + 32; 
   
};


let tempCelsijai = 32;
console.log(`Temperatura celsijais: ${tempCelsijai}`)
console.log(`Temperatura Farenheitas: ${cel_far(tempCelsijai)}`);



console.log('===== Is farenheito i celsijus =====');
function far_cel(farenheitas){
    return celsijus = (farenheitas - 32) * (5/9);
    
};


let tempFarenheitas = 77;
console.log(`Temperatura farenheitais: ${tempFarenheitas}`)
console.log(`Temperatura celsijais: ${far_cel(tempFarenheitas)}`);

console.log('********* 6 uzduotis ***********');
// Sukurkite kodą, kuris išspausdins į konsolę
// 1-2-3-4-5-6-7-8-9-10 vienoje eilutėje. Prieš vienetą ir po
// dešimties neturėtų būti brūkšniuko.

let skaiciuMasyvas = [1, 2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 , 10];

console.log(skaiciuMasyvas.join(' - '));

console.log('********* 7 uzduotis ***********');
// Panaudokite for ciklus, kad sukurtumėte tokį vaizdą konsolėje.
// *
// * *
// * * *
// * * * *
// * * * * *
let eilute = '';
for (let i = 1; i <= 5; i++) {  
    eilute += '* ' + '\n'; 
    for (let j = 1; j <= 5; j++){
        eilute = '* ';
    }
    }
console.log(eilute);
  
