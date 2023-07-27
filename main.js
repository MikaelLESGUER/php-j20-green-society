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