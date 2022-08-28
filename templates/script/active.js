const section = document.querySelectorAll(".section");
const img = document.querySelectorAll(".img");

window.addEventListener("scroll", () => {
  section.forEach((_, i) => {
    if (section[i].getBoundingClientRect().top >= scrollY) {
      img[i].src = img[i].dataset.secondsrc;
      img[i].src = img[i].dataset.src;
    }
  });
});
