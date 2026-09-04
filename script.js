// =========================
// D28 LOGISTICS
// MAIN JAVASCRIPT
// =========================

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav a");
const bookingForm = document.querySelector(".booking-form");


// =========================
// MOBILE MENU
// =========================

menuBtn.addEventListener("click", () => {

  nav.classList.toggle("active");

  const menuIsOpen = nav.classList.contains("active");

  menuBtn.setAttribute(
    "aria-expanded",
    menuIsOpen
  );

  menuBtn.setAttribute(
    "aria-label",
    menuIsOpen
      ? "Close menu"
      : "Open menu"
  );

  menuBtn.textContent = menuIsOpen
    ? "×"
    : "☰";

});


// =========================
// CLOSE MENU
// WHEN NAV LINK IS CLICKED
// =========================

navLinks.forEach((link) => {

  link.addEventListener("click", () => {

    nav.classList.remove("active");

    menuBtn.setAttribute(
      "aria-expanded",
      "false"
    );

    menuBtn.setAttribute(
      "aria-label",
      "Open menu"
    );

    menuBtn.textContent = "☰";

  });

});


// =========================
// DEMO BOOKING FORM
// =========================

bookingForm.addEventListener("submit", (event) => {

  event.preventDefault();

  alert(
    "Thank you! This booking form is currently a demo."
  );

});
