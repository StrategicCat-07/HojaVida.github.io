/* ============================================================
   script.js - interactividad de la hoja de vida
   ============================================================ */

// 1. Menú móvil: muestra u oculta la lista de enlaces
const botonMenu = document.querySelector(".menu-btn");
const listaMenu = document.querySelector("nav ul");
if (botonMenu) {
  botonMenu.addEventListener("click", () => listaMenu.classList.toggle("abierto"));
}

// 2. Animación de entrada: los elementos con clase "oculto" aparecen al hacer scroll
const observador = new IntersectionObserver((entradas) => {
  entradas.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add("visible");
      observador.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll(".oculto").forEach((el) => observador.observe(el));

// 3. Año automático en el pie de página
const anio = document.getElementById("anio");
if (anio) anio.textContent = new Date().getFullYear();

// 4. Formulario de contacto (solo en contacto.html)
const form = document.getElementById("form-contacto");
if (form) {
  form.addEventListener("submit", (ev) => {
    ev.preventDefault(); // evita recargar la página
    document.getElementById("mensaje-ok").style.display = "block";
    form.reset();
  });
}
