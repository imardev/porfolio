const menuBtn = document.getElementById("mobileBtn");
const menuMobile = document.getElementById("mobileNav");

menuBtn.addEventListener("click", () => {
  const isOpen = menuMobile.classList.toggle("active");
  menuBtn.setAttribute("aria-expanded", String(isOpen));
});
