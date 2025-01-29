console.log('******** 1 uzduotis *********');
//Sukurkite funkciją pasisveikinimui, šiai funkcijai per argumentus perduokite vardą, funkcijoje išveskite tekstą labas ir gautą vardą. Sukurkite kitą funkciją, kuri irgi per argumentus gautų vardą, tačiau pasakytų 'viso gero' ir patį vardą. Ne funkcijose susikurkite kintamąjį vardui saugoti ir įrašykite vardą. Iškvieskite abi funkcijas, perduodant kintamąjį joms.

function pasisveikinimas (vardas) {
    console.log('welcome ' + vardas);
}

function atsisveikinti (vardas){
    console.log('bye ' + vardas);
}

let vardas = 'Petras';

pasisveikinimas(vardas);
atsisveikinti(vardas);

console.log('******** 2 uzduotis *********');
//Sukurkite funkciją, kuriai perduotumėte du skaičius. Ši funkcija turi rasti kuris skaičius yra didesnis ir išvesti gautą atsakymą, o jei skaičiai lygūs - tuomet išvesti, kad skaičiai lygūs. Iškvieskite šią funkciją keletą kartų, duodant skirtingus skaičius.

function skaiciai(a, b) {
    if (a > b) {
        console.log(`${a} yra didesnis uz ${b}`);
    } else if (a < b) {
        console.log(`${a} yra mazesnis uz ${b}`);
    } else {
        console.log(`${a} ir ${b} skaiciai yra lygus`);
    }
}

skaiciai(10, 5);
skaiciai(10, 55);
skaiciai(10, 10);

console.log('******** 3 uzduotis *********');
//Sukurkite funkciją, kuri per argumentus gautų automobilių duomenis (markė, modelis, gamybos metai, darbinis tūris). Ši funkcija turėtų šiuos duomenis išvesti kaip nors gražiai formatuotai. Iškvieskite šią funkciją du kartus, perduodant skirtingus duomenis jai.


function auto(marke, modelis, gamybosMetai, darbinisTuris) {
    console.log(`Auto duomenys:
    Marke: ${marke}
    Modelis: ${modelis}
    Gamybos metai: ${gamybosMetai}
    Darbinis turis: ${darbinisTuris} L`);
}

auto('Audi', 'A8', 2015, 4.2);
auto('Mercedes', 'CL500', 2002, 5.0);

console.log('******** 4 uzduotis *********');
//Sukurkite funkciją sumai skaičiuoti, ši funkcija per argumentus turėtų gauti du skaičius, bei išvesti patį veiksmą kartu su atsakymu (pvz 7 + 5 = 12). Sukurkite tokias pačias funkcijas skirtumui, sandaugai ir dalmeniui rasti. Sukurkite dar vieną funkciją, kuri sugeneruotų du atsitiktinius skaičius, bei iškviestų kitas 4 funkcijas, perduodant joms sugeneruotus skaičius. Šią bendrąją funkciją iškvieskite keletą kartų.

function suma(a, b){
    let rezultatas = a + b;
    console.log(`${a} + ${b} = ${rezultatas}`);
}

function skirtumas(a, b){
    let rezultatas = a - b;
    console.log(`${a} - ${b} = ${rezultatas}`);
}

function daugyba(a, b){
    let rezultatas = a * b;
    console.log(`${a} * ${b} = ${rezultatas}`);
}

function dalyba(a, b){
    let rezultatas = a / b;
    console.log(`${a} : ${b} = ${rezultatas}`);
}

function random(){
    let numeris1 = Math.floor(Math.random() * 10) + 1;
    let numeris2 = Math.floor(Math.random() * 10) + 1;
    console.log('***********')
    console.log(`atsitiktiniai skaiciai ${numeris1}, ${numeris2}`);

    suma(numeris1, numeris2);
    skirtumas(numeris1, numeris2);
    daugyba(numeris1, numeris2);
    dalyba(numeris1, numeris2);
}

for (let i = 0; i < 3; i++){
    random();
}
