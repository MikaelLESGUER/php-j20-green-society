// Code JavaScript pour gérer le slider d'images
const sliderItems = document.querySelectorAll('.slider-item');
const sliderTitle = document.querySelector('.slider-title');
let currentIndex = 0;

// Fonction pour afficher l'image suivante dans le slider
function showNextSlide() {
    sliderItems[currentIndex].classList.remove('active');
    sliderTitle.classList.remove('visible');
    currentIndex = (currentIndex + 1) % sliderItems.length;
    sliderItems[currentIndex].classList.add('active');
    sliderTitle.classList.add('visible');
}

// Démarre le slider automatique
function startSlider() {
    setInterval(showNextSlide, 5000); // Change d'image toutes les 5 secondes (5000 ms)
}

// Démarrage du slider
startSlider();

// Exemple d'utilisation de WAI-ARIA pour décrire un bouton
const buttonElement = document.querySelector('button');
buttonElement.setAttribute('role', 'button');
buttonElement.setAttribute('aria-label', 'Cliquez ici pour effectuer une action');

const sliderMain = document.querySelectorAll('.slider-main');
let mainIndex = 0;

// Fonction pour afficher l'image suivante dans le slider
function showNextSlide() {
    sliderMain[mainIndexIndex].classList.remove('active');
    mainIndex = (mainIndex + 1) % sliderMain.length;
    sliderMain[mainIndexIndex].classList.add('active');
}

// Démarre le slider automatique
function startSlider() {
    setInterval(showNextSlide, 5000); // Change d'image toutes les 5 secondes (5000 ms)
}

// Démarrage du slider
startSlider();

// Gestion du bouton toggle pour le mode daltonien
document.getElementById('toggleDaltonianModeButton').addEventListener('click', function() {
    document.body.classList.toggle('daltonian-mode');
});

document.getElementById('increaseLineHeightButton').addEventListener('click', function() {
    document.body.classList.toggle('increased-line-height');
});