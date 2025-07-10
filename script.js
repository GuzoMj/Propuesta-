let current = 0;
const slides = document.querySelectorAll(".slide");

// Botón de inicio
document.getElementById("startPresentation").addEventListener("click", () => {
  slides[current].classList.remove("active");
  current = 1;
  slides[current].classList.add("active");
});

// Botón PDF
document.getElementById("downloadPDF").addEventListener("click", () => {
  const element = document.body;
  html2pdf().from(element).save("Propuesta_Oasis.pdf");
});
