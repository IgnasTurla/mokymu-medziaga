// let inputSkaicius = document.getElementById('inputSkaicius');

// document.querySelector('button').addEventListener('click',() => {
//     console.dir(inputSkaicius.value);
//     console.log(inputSkaicius.value);
//     console.log(inputSkaicius.valueAsNumber);
//     inputSkaicius.valueAsNumber = 150;
// });

document.getElementById('addButton').addEventListener('click', function() {
    // Gauname įvestą skaičių
    const skaicius = parseInt(document.getElementById('inputSkaicius').value);

    // Išvalome buvusį turinį
    const resultDiv = document.querySelector('.result');
    resultDiv.innerHTML = ''; // Ištriname viską, kas buvo prieš tai

    // Sukuriame naują div elementą linijai
    const linija = document.createElement('div');
    linija.classList.add('linija'); // Taikome pagrindinį linijos stilių

    // Tikriname, ar skaičius yra lyginis ar nelyginis
    if (skaicius % 2 === 0) {
        linija.classList.add('lyginis'); // Pridedame žalią fono spalvą
        linija.textContent = `${skaicius} - Lyginis`;
    } else {
        linija.classList.add('nelyginis'); // Pridedame raudoną fono spalvą
        linija.textContent = `${skaicius} - Nelyginis`;
    }

    // Pridedame naują liniją
    resultDiv.appendChild(linija);
});