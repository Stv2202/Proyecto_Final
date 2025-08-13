// ======================
// LÓGICA DEL MENÚ
// ======================
const menuBtn = document.getElementById("menu");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

// Evento para abrir/cerrar el menú en dispositivos móviles
menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

// Evento para cerrar el menú cuando se hace clic en un enlace
navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

// ======================
// ANIMACIONES CON SCROLLREVEAL
// ======================
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// Ejemplos de animaciones
ScrollReveal().reveal(".header_image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header_content h2", {
  ...scrollRevealOption,
  dealy: 500,
});

// ======================
// TABS DE OFERTAS
// ======================
const tabs = document.querySelector(".deals_tabs");

tabs.addEventListener("click", (e) => {
  const tabContents = document.querySelectorAll(".deals_container .tab_content");

  // Activar/desactivar pestañas
  Array.from(tabs.children).forEach((item) => {
    if (item.dataset.id === e.target.dataset.id) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });

  // Mostrar el contenido de la pestaña seleccionada
  tabContents.forEach(item => {
    if(item.id === e.target.dataset.id){
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
});

// ======================
// CARRUSEL CON SWIPER
// ======================
const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
});

// ======================
// ENVÍO DEL FORMULARIO DE SUSCRIPCIÓN
// ======================
document.getElementById("subscribe-form").addEventListener("submit", async function(e) {
  e.preventDefault(); // Evita que la página se recargue

  // Obtener el correo que escribió el usuario
  const correo = this.querySelector("[name='from_email']").value;

  try {
    // Enviar el correo al backend usando fetch
    const res = await fetch("http://localhost:3000/enviar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ correo }) // Mandamos el email como JSON
    });

    // Si el envío es exitoso
    if (res.ok) {
      alert("¡Suscripción enviada con éxito!");
      this.reset(); // Limpiar el formulario
    } else {
      alert("Error al enviar la suscripción");
    }
  } catch (err) {
    console.error(err);
    alert("Ocurrió un error al enviar la suscripción");
  }
});