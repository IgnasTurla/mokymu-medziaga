console.log('******** 1 uzduotis *********');
//Susikurkite funkciją, kuri grąžintų bet kokį jūsų norimą sakinį. Iškvieskite šią funkciją ir išspausdinkite gautus rezultatus.

function sakinys(){
  return 'As noriu svente svest'
}

console.log(sakinys());

console.log('******** 2 uzduotis *********');
//Susikurkite funkciją, kuri grąžintų atsitiktinai sugeneruotą skaičių. Iškvieskite šią funkciją kelis kartus ir gautus atsakymus išveskite kokiu norite būdu.



function atsitiktinisSkaicius(){
  let atsitiktinis = Math.floor(Math.random() * 100) + 1;
  return atsitiktinis
}

for (let i = 0; i < 3; i++){
  console.log(atsitiktinisSkaicius());
}

console.log('******** 3 uzduotis *********');
//Susikurkite funkciją, kuri per argumentus priimtų studento vardą ir vidurkį. Ši funkcija turėtų sugeneruoti iš to sakinį (pvz Studentas Tomas turi vidurkį 8.7) ir tai grąžinti kaip atsakymą. Iškvieskite šią funkciją bent porą kartų, perduodant vis skirtingus duomenis. Gautus atsakymus išveskite.

function mokinys(vardas, pazymiai) {
  let suma = 0;
  for (let i = 0; i < pazymiai.length; i++) {
    suma += pazymiai[i];
  }
  
  let vidurkis = suma / pazymiai.length; 
  

  return `Studentas: ${vardas} turi vidurki: ${vidurkis.toFixed(2)}`; 
}


console.log(mokinys("Tomas", [1, 5, 8, 3, 6, 9])); 

console.log('******** 4 uzduotis *********');
//Susikurkite funkciją, kuri per argumentus gautų skaičių. Ji turėtų surasti duoto skaičiaus mažiausią daliklį (skaičių iš kurio dalinasi be liekanos). Už funkcijos ribų sukite ciklą nuo 10 iki 30 ir kiekvienoje ciklo iteracijoje iškvieskite šią funkciją, perduodant ciklo kintamąjį.

function maziausiasDaliklis(skaicius){
  for (let i = 2; i <= skaicius; i++){
    if(skaicius % i === 0) {
      return i;
    }
  }
  return skaicius;
}



for (let i = 10; i <= 30; i++){   
     let daliklis = maziausiasDaliklis(i);
     console.log(`skaicius: ${i} maziausias daliklis: ${daliklis}`)
}

console.log('******** 5 uzduotis *********');
//Susikurkite funkciją, kuri per argumentus gautų skaičių. Ji turėtų patikrinti ar šis skaičius yra pirminis (grąžina true jei pirminis, ir false jei ne pirminis). Už funkcijos ribų sukite ciklą nuo 2 iki 15, kiekvienoje ciklo iteracijoje išveskite tikrinamą skaičių ir šalia jo iškviestos funkcijos atsakymą (pvz 10 false, 11 true, ...).

function rastiPirmini(skaicius){
  for (let i = 2; i <= skaicius / 2; i++){
    if (skaicius % i === 0){
      return false;
    }
  }
  return true;
}

for (let i = 2; i <= 15; i++){
  console.log(i, rastiPirmini(i));
}

console.log('******** 5 uzduotis *********');
//Susikurkite bent 3 matematines funkcijas, priimančias reikiamus argumentus (pvz suma iš dviejų skaičių, suma iš trijų skaičių, skirtumas, sandauga, dalyba) ir grąžinančias atitinkamus atsakymus. Taip pat, susikurkite funkciją, kurioje būtų sugeneruojamas reikiamas kiekis atsitiktinių skaičių ir išvedami visų skaičiavimų atsakymai su veiksmais (iškviečiant atitinkamas kitas funkcijas ir perduodant reikiamus kintamuosius) (pagal 7 pavyzdį). Iškvieskite šią pagrindinę funkciją bent kartą.

function sumaIsDvieju(a, b){
    return a + b;
}

function sumaIsTriju(a, b, c){
  return a + b + c;
}

function skirtumas(a, b){
  return a - b;
}

function sandauga(a, b){
  return a * b;
}

function dalyba(a, b){
  if (b === 0) {
    return "nesidalina is nulio";
  }
  return a / b;
}

function isvedimas(){
  let a = Math.floor(Math.random() * 10) + 1;
  let b = Math.floor(Math.random() * 10) + 1;
  let c = Math.floor(Math.random() * 10) + 1;
  console.log(`suma is dvieju: ${a} + ${b} = ${sumaIsDvieju(a, b)}`);
  console.log(`suma is triju: ${a} + ${b} + ${c} = ${sumaIsTriju(a, b, c)}`);
  console.log(`skirtumas: ${a} - ${b} = ${skirtumas(a, b)}`);
  console.log(`daugyba: ${a} * ${b} = ${sandauga(a, b)}`);
  console.log(`dalyba: ${a} / ${b} = ${dalyba(a, b).toFixed(2)}`);
}

isvedimas();


