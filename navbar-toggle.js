window.addEventListener("scroll", function () {
  const heroNavbar = document.getElementById("hero-navbar");
  const defaultNavbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    if (heroNavbar) heroNavbar.style.top = "-120px"; // Hide hero nav
    if (defaultNavbar) defaultNavbar.style.display = "flex"; // Show Quarto nav
  } else {
    if (heroNavbar) heroNavbar.style.top = "0"; // Show hero nav
    if (defaultNavbar) defaultNavbar.style.display = "none"; // Hide Quarto nav
  }
});
