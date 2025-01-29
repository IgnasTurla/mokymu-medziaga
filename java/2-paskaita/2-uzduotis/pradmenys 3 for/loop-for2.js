console.log('=================================')
console.log('====== console for 2 uzduotys =====')
console.log('=========  1 uzduotis  ==========')
//Raskite visų skaičių nuo 1 iki 100 sumą.
let suma = 0;

for (let i = 1; i <= 100; i++) {
    suma += i;
}

console.log(suma);

console.log('=========  2 uzduotis  ==========')
//Raskite visų lyginių skaičių nuo 20 iki 50 sumą.
suma = 0;

for (let i = 20; i <= 50; i++) {
    if (i % 2 === 0) {
        suma += i;
    }
}

console.log(suma);


console.log('=========  3 uzduotis  ==========')
//Raskite visų nelyginių skaičių nuo 30 iki 60 sumą.
suma = 0;
for (let i = 30; i <= 60; i++) {
    if (i % 2 !== 0) {
        suma += i;
    }
}

console.log(suma);


console.log('=========  4 uzduotis  ==========')
//Rasti visų skaičių, žemesnių už 1000 ir kurie dalinasi iš 3 arba 5, sumą. Pavyzdys:
//	Visi skaičiai mažesni už 10 ir kurie dalinasi iš 3 arba 5 yra: 3, 5, 6, 9.
//	Šių skaičių suma yra 23.
// Turite gauti 233168 atsakymą. 
suma = 0;

for (let i = 1; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        suma += i;
    }
}

console.log(suma);


console.log('=========  5 uzduotis  ==========')
for (let i = 1; i <= 100; i++) {
    
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }
   
    else if (i % 3 === 0) {
        console.log("Fizz");
    }
 
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
   
    else  {
        console.log(i);
    }
}


console.log('=========  6 uzduotis  ==========')
let n = 10;

let pirmas = 1;
let antras = 1;
let sumuoti = 0;

console.log(pirmas);
console.log(antras);



for (let i = 2; i <= n; i++){
    sumuoti = pirmas + antras;
    pirmas = antras;
    antras = sumuoti;
    console.log(sumuoti);
  
}
    
   


console.log('=========  7 uzduotis  ==========')










console.log('=================================')