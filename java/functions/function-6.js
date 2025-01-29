console.log('******** 1 uzduotis *********');
//Susikurkite darbuotojo objektą, kuriame turėtumėte šias savybes: vardas, pavardė, dabartinis atlyginimas, etatas. Šiame objekte sukurkite funkciją, kuri per argumentus priimtų procentus ir paskaičiuotų koks būtų darbuotojo atlyginimas, jei jo atlyginimas būtų pakeltas per nurodytą kiekį procentų. Taip pat, susikurkite funkciją, kuri per argumentus priimtų atnaujintą etato skaičių, ji turėtų paskaičiuoti kiek pasikeistų darbuotojo atlyginimas, jei jis pradėtų dirbti nurodytu etatu (tarkim jei dirba pilnu etatu ir atlyginimas 1000 eurų, tai per pusę sumažinus etatą (argumentuose būtų 0.5) jo atlyginimas kristų iki 500). Iškvieskite šias objekto funkcijas ir išsiveskite gautus atsakymus.

// let darbuotojas = {
//   vardas: 'Audrius',
//   pavarde: 'Audrelis',
//   dabartinisAtlyginimas: 1500,
//   etatas: 'Pilnas',
//   naujasAtlyginimas: function(procentas){
//     return this.dabartinisAtlyginimas * procentas / 100 + this.dabartinisAtlyginimas;
    
//   },
//   atlyginimasNaujasEtatas: function(naujasEtatas){
//     return this.dabartinisAtlyginimas * naujasEtatas;
//   }  
// };
// console.log('dabartinis atlyginimas: '+darbuotojas.dabartinisAtlyginimas);
// console.log(darbuotojas.naujasAtlyginimas(15).toFixed(2));
// console.log(darbuotojas.atlyginimasNaujasEtatas(0.5).toFixed(2));

console.log('******** 2 uzduotis *********');
//Praeitame skyriuje sukurtą darbuotojo objektą pasikopijuokite į naują gamyklos (factory) funkciją, kuri galėtų sukurti daugiau tokių objektų. Pritaikykite objektą, kad duomenis prisiskirtų iš funkcijos argumentų. Už funkcijos ribų sukurkite ir sudėkite keletą tokių darbuotojų į masyvą. Tuomet mėginkite prasukti ciklą pro sukurtą darbuotojų masyvą ir išsiveskite darbuotojų duomenis, taip pat, pakvieskite skaičiavimų funkcijas ir pasižiūrėkite gaunamus rezultatus.

function sukurtiDarbuotojus(vardas, pavarde, dabartinisAtlyginimas, etatas) {
  return {
    vardas,
    pavarde,
    dabartinisAtlyginimas,
    etatas,
    // Funkcija naujam atlyginimui su procentiniu padidėjimu
    naujasAtlyginimas: function(procentas) {
      return this.dabartinisAtlyginimas * procentas / 100 + this.dabartinisAtlyginimas;
    },
    // Funkcija pakeistam atlyginimui pagal naują etatą
    atlyginimasNaujasEtatas: function(naujasEtatas) {
      return this.dabartinisAtlyginimas * naujasEtatas;
    }
  };
}

let darbuotojai = [
  sukurtiDarbuotojus('Audrius', 'Audrelis', 1500, 'Pilnas'),
  sukurtiDarbuotojus('Marius', 'Marko', 1800, 'Pilnas'),
  sukurtiDarbuotojus('Jonas', 'Jonaitis', 1200, 'Pusė etato')
];

// Prasukame ciklą per darbuotojus ir išvedame jų duomenis

  console.log(`Vardas: ${darbuotojas.vardas} ${darbuotojas.pavarde}`);
  console.log(`Atlyginimas: ${darbuotojas.dabartinisAtlyginimas} EUR`);
  console.log(`Etatas: ${darbuotojas.etatas}`);