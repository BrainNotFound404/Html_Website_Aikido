//Modificam clasa de active a elementelor in functie de butonul apasat

const $list = document.querySelectorAll('.navbar li');

function activeLink() {
    $list.forEach(($li) => {
        $li.classList.remove('active')
    });
    this.classList.add('active');
}

$list.forEach(($li) => {
    $li.addEventListener(
        'click',
        activeLink,
    );
});

//Facem caruselul functional

let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-images img');
const indicators = document.querySelectorAll('.carousel-indicators .indicator');
const totalSlides = slides.length;
const carouselImages = document.querySelector('.carousel-images');

function updateCarousel() {
    // Updatam pozitia slide urilor folosind animatie 
    const newTransformValue = -currentSlide * 100;
    carouselImages.style.transform = `translateX(${newTransformValue}%)`;

}

document.querySelector('.left-arrow').addEventListener('click', () => {
    currentSlide = (currentSlide == 0) ? totalSlides - 1 : currentSlide - 1;
    updateCarousel();
});

document.querySelector('.right-arrow').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
});

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentSlide = index;
        updateCarousel();
    });
});

// Initializam caruselul
updateCarousel();

// Selectez elementul cu clasa delayed link (ar trebui sa fie doar unul)
const links = document.querySelectorAll('.delayed-redirect');

links.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Nu navigam instant, lasam sa se efectueze tranzitiile inainte
    const targetUrl = link.getAttribute('data-target'); // Luam path-ul din data-target


    setTimeout(() => {
      window.location.href = targetUrl; // Redirectionam utilizatorul catre pagina dorita
    }, 1000); // delay o secunda
  });
});
