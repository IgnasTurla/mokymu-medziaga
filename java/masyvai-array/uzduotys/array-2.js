console.log('******************************')
console.log('********** pirma uzduotis *************')
//Susikurkite masyvą studijų programų pavadinimams saugoti. Užpildykite šį masyvą duomenimis. Išveskite kiekvieną studijų programą atskiroje eilutėje.
console.log('***while budas***')
let programos = ['pirma studija', 'antra studija', 'trecia studija', 'ketvirta studija'];
let i = 0;
while (i < programos.length){
    console.log(programos[i]);
    i++;
}
console.log('***for budas***')

for (i = 0; i < programos.length; i++) {
    console.log(programos[i]);
}



console.log('******************************')
console.log('********** antra uzduotis *************')
//Susikurkite masyvą šalių pavadinimams saugoti ir jį užpildykite duomenimis. Išveskite šalių pavadinimus atskirose eilutėse, su prierašu "šalis" ir tada nurodant šalį iš masyvo.
let salys = ['Danija', 'Lietuva', 'Lenkija', 'Prancuzija', ];
let j = 0;

while (j < salys.length) {
    console.log('Salis:', salys[j]+'-', 'masyvas:',j);
    j++;
}
console.log('******************************')
console.log('********** trecia uzduotis *************')
//Susikurkite masyvą įgyvendintų projektų pavadinimams saugoti. Užpildykite šį masyvą duomenimis. Išveskite kiekvieną projektą atskirose eilutėse, prieš kiekvieną projektą parašant kelintas tai projektas yra (pradedant 1-u).
console.log('***for budas***')
let projektai = ['pirmas projektas', 'antras projektas', 'trecias projektas', 'ketvirtas projektas', ];

for (let i = 0; i < projektai.length; i++) {
    console.log((i + 1)+ projektai[i]);
}
console.log('***while budas***')

i = 0;

while (i < projektai.length) {
    console.log(i + 1, projektai[i]);
    i++;
}
console.log('******************************')
console.log('********** ketvirta uzduotis *************')
//Susikurkite skaičių masyvą ir užpildykite duomenimis. Iš masyvo išveskite tik tuos skaičius, kurie yra didesni nei 5.

let skaiciai = [1, 55, 36 , 2, 99, 5, 4, 0];



let k = 0;

while (k < skaiciai.length) {
    if (skaiciai[k] > 5) {
        console.log('skaicius didesnis uz penkis'+'-'+skaiciai[k]);
        } else if (skaiciai[k] < 5) {
            console.log('**skaicius mazesnis uz penkis**'+'-'+skaiciai[k])
        }

    k++;
}

console.log('******************************')
console.log('********** penkta uzduotis *************')
//Susikurkite skaičių masyvą ir užpildykite jį atsitiktiniais skaičiais. Raskite visų skaičių, kurie dalinasi iš 4 sumą.

let atsitiktiniai = [2, 64, 23, 22, 99, 43, 11, 67, 54, 75, 5, 4];

let e = 0;

let suma = 0;

while (e < atsitiktiniai.length) {
    if (atsitiktiniai[e] % 4 === 0){
         console.log('skaiciai kurie dalinasi is keturiu:'+atsitiktiniai[e]);
         suma += atsitiktiniai[e];
    }
    e++;
}
console.log('skaiciu suma:'+suma);

console.log('******************************')
console.log('********** sesta uzduotis *************')
//Susikurkite pažymių masyvą ir užpildykite jį atsitiktiniais pažymiais. Raskite šių pažymių vidurkį. Išveskite sugeneruotus duomenis ir gautą vidurkį.

let pazymiai = [];
suma= 0;
i = 0;

while (i < 7){
    let pazimys = Math.floor(Math.random() * 10) + 1;
    pazymiai.push(pazimys);
    console.log('gautas pazimys:'+pazimys);
    suma += pazimys;
   i++;
}

let vidurkis = suma / pazymiai.length;

console.log('pazymiu vidurkis yra:'+ vidurkis.toFixed(1));

console.log('******************************')
console.log('********** septinta uzduotis *************')
//Susikurkite pažymių masyvą ir užpildykite jį atsitiktiniais pažymiais. Raskite šių pažymių vidurkį. Išveskite visus skaičius, kurie yra didesni nei vidurkis.

pazymiai = [];
i = 0;
suma = 0;
for (i = 0; i < 7; i++){
    pazimys = Math.floor(Math.random() * 10) + 1;
    pazymiai.push(pazimys);
    suma += pazimys;
    console.log('pazimys:'+pazimys);
}

vidurkis = suma / pazymiai.length;

console.log('vidurkis:'+vidurkis.toFixed(1))

i = 0;
while (i < pazymiai.length){
    if (pazymiai[i]> vidurkis){
        console.log('pazimys didesnis uz vidurki:'+pazymiai[i]);
    }
    i++;
}



