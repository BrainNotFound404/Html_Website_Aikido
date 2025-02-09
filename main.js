//Nav Bar

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



// Generate text from the list with random color
const randomTextElement = document.getElementById("randomText");
const randomMessages = [
  "勇気を出してください",
  "学び続ける",
  "あなたはうまくやっています",
  "自分を信じて",
  "夢を追いかけて"
];
const randomIndex = Math.floor(Math.random() * randomMessages.length);
const randomMessage = randomMessages[randomIndex];
const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

randomTextElement.textContent = randomMessage;
randomTextElement.style.color = randomColor;

// Store user data in localStorage
function storeMessage() {
    const userName = document.getElementById("userName").value.trim();
    const userMessage = document.getElementById("userMessage").value.trim();
  
    // Regular expression to validate the name (letters and spaces only)
    const nameRegex = /^[a-zA-Z\s]+$/;
  
    if (!nameRegex.test(userName)) {
      alert("Nume invalid. Un nume trebuie sa contina doar litere si spatii");
      return;
    }
  
    if (userName && userMessage) {
      localStorage.setItem(userName, userMessage);
      alert(`Mesajul lui ${userName} a fost salvat`);
    } else {
      alert("Va rugam sa completati ambele sectiuni");
    }
  }


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

