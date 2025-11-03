const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

let counter = 0;

function updateCarousel() {
    carouselSlide.style.transform = 'translateX(' + (-100 * counter) + '%)';
}

// Bouton suivant
nextBtn.addEventListener('click', () => {
    counter++;
    if (counter >= carouselImages.length) {
        counter = 0;
    }
    updateCarousel();
});

// Bouton précédent
prevBtn.addEventListener('click', () => {
    counter--;
    if (counter < 0) {
        counter = carouselImages.length - 1;
    }
    updateCarousel();
});