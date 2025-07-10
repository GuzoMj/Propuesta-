let current = 0;
const slides = document.querySelectorAll(".slide");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

// Mostrar slide actual
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

// Botones de navegación
nextButton.addEventListener("click", () => {
  current = (current + 1) % slides.length;
  showSlide(current);
});

prevButton.addEventListener("click", () => {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
});

// Navegación con flechas ← →
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    current = (current + 1) % slides.length;
    showSlide(current);
  } else if (e.key === "ArrowLeft") {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  }
});

// Gestos táctiles en móvil
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX;
}, false);

document.addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].screenX;
  if (touchEndX < touchStartX - 50) {
    current = (current + 1) % slides.length;
    showSlide(current);
  }
  if (touchEndX > touchStartX + 50) {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  }
}, false);

// Botón de inicio
document.getElementById("startPresentation").addEventListener("click", () => {
  current = 1; // Avanza a la siguiente slide
  showSlide(current);
});

// Descargar PDF
document.getElementById("downloadPDF").addEventListener("click", () => {
  const element = document.body;
  html2pdf().from(element).save("Propuesta_Oasis.pdf");
});

// Mostrar primera slide
document.addEventListener("DOMContentLoaded", () => {
  showSlide(current);
});
