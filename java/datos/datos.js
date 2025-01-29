console.log('********  1  *********');
// //isvesti datas now ir now - n dienu.
// isvesti lt formatu
// pvz : n = 5,  2025-01-23 - 2025-01-18 

let now = new Date();
console.log(now);


console.log('LT laikas: ' + moment().format('MMMM Do YYYY, h:mm:ss a'));

let n = 7;

now = new Date();
now.setDate(now.getDate() - n);
console.log(now); 

console.log('********  2  *********');
// //palyginti dvi datas ir pasakyti kuri yra veliau uz kita. 
// date 1 veliau uz date2 arba date2 veliau uz date1

let date1 = new Date('2025-01-24');  
let date2 = new Date('2025-01-18');  

if (date1 > date2){
    console.log(' date 1 veliau uz date2')
} else if (date1 < date2){
    console.log(' date 2 veliau uz date1')
} else {
    console.log('abi datos vienodos')
};

console.log('********  3  *********');
// //datu skirtuma
// dienas
// valandas
// metus

let data1 = new Date('2025-01-24 12:19:00'); 
let data2 = new Date('2022-01-18 08:15:00');

//// Apskaičiuojame skirtumą metais
let metuSkirtumas = data1.getFullYear() - data2.getFullYear();

// Apskaičiuojame skirtumą mėnesiais
let menesiuSkirtumas = data1.getMonth() - data2.getMonth();

// Apskaičiuojame skirtumą dienomis
let dienuSkirtumas = data1.getDate() - data2.getDate();

console.log(menesiuSkirtumas);
console.log(menesiuSkirtumas);
console.log(dienuSkirtumas);