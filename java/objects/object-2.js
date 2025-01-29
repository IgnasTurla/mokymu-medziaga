console.log('********* 1 uzduotis *********');
//Susikurkite objektą informacijai apie knygyną saugoti. Į šį objektą sudėkite tokias savybes su reikšmėmis: pavadinimas, adresas, plotas (kv. m.), kiek turi knygų, darbo valandos, ar atidarytas. Išveskite šio knygyno objekto raktus su reikšmėmis. Tuomet išveskite visas knygyno savybes, kurių reikšmės yra ne string tipo (plotas, kiek turi knygų ir pan.).

let knygynas = {
  pavadinimas: "Geriausia Knyga",
  adresas: "Vilnius",
  plotas: 120, 
  kiekTuriKnygu: 3500, 
  darboValandos: {
    pirmadienis: "09:00 - 18:00",
    antradienis: "09:00 - 18:00",
    treciadienis: "09:00 - 18:00",
    ketvirtadienis: "09:00 - 18:00",
    penktadienis: "09:00 - 18:00",
    sestadienis: "10:00 - 15:00",
    sekmadienis: "Uzdaryta"
  },
  atidarytas: true 
};

for (let raktas in knygynas){
  console.log(raktas + ':' + knygynas[raktas]);
}
console.log('*************')
for (let raktas in knygynas) {
  if (typeof knygynas[raktas] !== 'string') {
    console.log(raktas + ": " + knygynas[raktas]);
  }
};