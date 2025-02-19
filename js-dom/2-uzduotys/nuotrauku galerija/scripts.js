// Pažymėti mygtukus ir visą galeriją
const nextButton = document.getElementById('next');
const backButton = document.getElementById('back');
const galleryCards = document.querySelectorAll('.card');
let currentIndex = 0;

// Funkcija, kuri pakeičia pagrindinį paveikslėlį pagal dabartinį indeksą
function updateSelectedImage() {
    // Pažymėkite visus paveikslėlius galerijoje
    const selectedImage = document.querySelector('.selected-image');
    const imagePath = galleryCards[currentIndex].querySelector('img').src;
    
    // Nustatykite pagrindinio paveikslėlio foną pagal pasirinktą paveikslėlį
    selectedImage.style.backgroundImage = `url(${imagePath})`;
}

// Funkcija pereiti į kitą paveikslėlį
function nextImage() {
    // Jei pasieksime paskutinį paveikslėlį, grįžkite į pirmą
    currentIndex = (currentIndex + 1) % galleryCards.length;
    updateSelectedImage();
}

// Funkcija pereiti į ankstesnį paveikslėlį
function backImage() {
    // Jei pasieksime pirmą paveikslėlį, grįžkite į paskutinį
    currentIndex = (currentIndex - 1 + galleryCards.length) % galleryCards.length;
    updateSelectedImage();
}

// Įvykiai mygtukams
nextButton.addEventListener('click', nextImage);
backButton.addEventListener('click', backImage);

// Inicializuokite pradines paveikslėlio rodymas
updateSelectedImage();
