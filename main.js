const menuBtn = document.getElementById("menu");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header_image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header_content h2", {
  ...scrollRevealOption,
  dealy: 500,
});
ScrollReveal().reveal(".header_content h1", {
  ...scrollRevealOption,
  dealy: 1000,
});
ScrollReveal().reveal(".header_content .section_description", {
  ...scrollRevealOption,
  dealy: 1500,
});
ScrollReveal().reveal(".header_form form", {
  ...scrollRevealOption,
  dealy: 2000,
});
ScrollReveal().reveal(".abour_card", {
  ...scrollRevealOption,
  interval: 500,
});

const tabs = document.querySelector(".deals_tabs");

tabs.addEventListener("click", (e) => {
  const tabContents = document.querySelectorAll(
    ".deals_container .tab_content"
  );

  Array.from(tabs.children).forEach((item) => {
    if (item.dataset.id === e.target.dataset.id) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
  tabContents.forEach(item => {
    if(item.id === e.target.dataset.id){
      item.classList.add("active");
    }else{
       item.classList.remove("active");
    }
  });
});
