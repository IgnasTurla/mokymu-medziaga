console.log('**********************');
//Apversti string tipo kintamojo reikšmę. pvz: labas -> sabal. for ir metodu.
let stringas = 'laba diena';
let apverstasStringas = '';

for (let i = stringas.length - 1; i >= 0; i--) {
  apverstasStringas += stringas[i];
}

console.log(apverstasStringas); 

let tekstas = 'As gerai vairuoju';

// Panaudojame split(), reverse() ir join() metodus
let apverstasTekstas = tekstas.split('').reverse().join('');

console.log(apverstasTekstas); 

console.log('**********  2  ************');
//Funkcija, kuri tikrins ar tekste yra tam tikras zodis. 

function tikrintiZodi(sakinys, zodis) {
    for (let i = 0; i <= sakinys.length - zodis.length; i++) 
      if (sakinys.slice(i, i + zodis.length) === zodis) return true;
    
    return false;
  }
  
  let sakinys = 'As gerai vairuoju';
  let zodis = 'gerai';
  console.log(tikrintiZodi(sakinys, zodis));
    






