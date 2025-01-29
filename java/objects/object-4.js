console.log('********* 1 uzduotis *********');

let imones = [
    {
        pavadinimas: 'UAB Brc',
        veiklosMetai: 2010,
        darbuotojai: 70,
        pelnas: 5,
    },
    {
        pavadinimas: 'UAB Maxima',
        veiklosMetai: 2000,
        darbuotojai: 7000,
        pelnas: 4,
    }
];

let dabartiniaiMetai = new Date().getFullYear();
let bendrasAmzius = 0, bendrasPelnas = 0, bendrasDarbuotojuKiekis = 0;

imones.forEach(imone => {
    console.log('Imones pavadinimas: ' + imone.pavadinimas);
    console.log('veiklos metai: ' + imone.veiklosMetai + ' Metai');
    console.log('darbuotoju kiekis: ' + imone.darbuotojai);
    console.log('pelnas: ' + imone.pelnas + ' EUR');
    console.log('***********');

    bendrasAmzius += (dabartiniaiMetai - imone.veiklosMetai);
    bendrasPelnas += imone.pelnas;
    bendrasDarbuotojuKiekis += imone.darbuotojai;
})




console.log('Vidutinis imoniu amzius: ' + (bendrasAmzius / imones.length).toFixed(0) + ' metai');
console.log('Darbuotoju bendras kiekis: ' + (bendrasDarbuotojuKiekis / imones.length).toFixed(0));
console.log('Bendras pelnas ' + (bendrasPelnas / imones.length));