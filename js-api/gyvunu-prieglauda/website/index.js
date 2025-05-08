const BASE_URL = 'http://localhost:7789';

const getData = (url) => {
    return fetch(BASE_URL + url).then(response => response.json())
}

getData('/pets')
.then(data => console.log(data))

const generateProjectsHTML = (pets) => {
    return pets.map( pets => {
        return `
           <div class="project-card">
                <h5>${pets.name}</h5>
                <p>Metai: ${pets.age}</p>
                <p>Veisle: ${pets.breed}</p>
                <p>${pets.type}, skiepyta(s) ${pets.vaccinated ? '<strong>Taip</strong>' : '<strong>Ne</strong>'}, Iesko namu</p> toks
                <div class="project-card-tags">
                <p>DRAUGISKAS</p>
                <p>ZAISMINGAS</p>
                <p>GERAS SU VAIKAIS</p>
                <p>ILGO KAILIO</p>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, doloribus esse molestias, laborum ab at nihil error reiciendis ipsam nostrum ducimus distinctio? A, tempore voluptatem? Aliquid necessitatibus quisquam tempore cumque.</p>
                            </div>
        `;
    }).join('');
};

window.addEventListener('DOMContentLoaded', async () => {
    let pets = await getData('/pets');


    document.querySelector('.main-project-cards').innerHTML = generateProjectsHTML(pets);
  
});