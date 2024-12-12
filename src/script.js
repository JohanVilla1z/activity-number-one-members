// Botón de contacto
const buttonSocial = document.getElementById("social-button");
const closeButton = document.getElementById("close");

buttonSocial.addEventListener("click", () => {
    const dialog = document.querySelector("dialog");
    dialog.showModal();
    dialog.classList.add("active");
});

closeButton.addEventListener("click", () => {
    const dialog = document.querySelector("dialog");
    dialog.close();
    dialog.classList.remove("active");
});

// Selección de elementos del carrusel
const carouselContainer = document.querySelector('.carousel__container');
const carouselItems = document.querySelectorAll('.carousel__item');
const prevButton = document.querySelector('.carousel__button--prev');
const nextButton = document.querySelector('.carousel__button--next');

let currentIndex = 0;
const intervalTime = 3000;
let autoSlide;

function updateCarousel() {
  const offset = -currentIndex * 100;
  carouselContainer.style.transform = `translateX(${offset}%)`;
}

function nextImage() {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  updateCarousel();
}

function prevImage() {
  currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  updateCarousel();
}

nextButton.addEventListener('click', () => {
  nextImage();
  resetAutoSlide();
});

prevButton.addEventListener('click', () => {
  prevImage();
  resetAutoSlide();
});

function startAutoSlide() {
  autoSlide = setInterval(nextImage, intervalTime);
}

function stopAutoSlide() {
  clearInterval(autoSlide);
}

function resetAutoSlide() {
  stopAutoSlide();
  startAutoSlide();
}

startAutoSlide();
