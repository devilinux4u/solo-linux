const sections = document.querySelectorAll("section");
const img = document.querySelectorAll(".img");

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.7,
};

let observer = new IntersectionObserver(check, options);

function check(checks) {
  checks.forEach((check, i) => {
    const className = check.target.className;
    console.log(className);
  });
  // console.log(checks);
}

sections.forEach((section) => {
  observer.observe(section);
});
