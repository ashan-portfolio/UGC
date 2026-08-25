/* ============================
NAVBAR SCROLL
============================ */
const nav = document.querySelector(".navbar");
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    nav.style.padding = "18px 10%";
  } else {
    nav.style.padding = "30px 10%";
  }

  if (window.scrollY > 60) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

/* ============================
SMOOTH SCROLL
============================ */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

/* ============================
SCROLL REVEAL OBSERVER
============================ */
const revealItems = document.querySelectorAll(
  ".service-card, .portfolio-card, .number, .section-title"
);

revealItems.forEach((el) => el.classList.add("hidden"));

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.15 }
);

revealItems.forEach((item) => revealObserver.observe(item));

/* ============================
TESTIMONIAL SLIDER
============================ */
const testimonials = document.querySelectorAll(".testimonial");
let current = 0;

if (testimonials.length > 0) {
  setInterval(() => {
    testimonials.forEach((t) => t.classList.remove("active"));
    current = (current + 1) % testimonials.length;
    testimonials[current].classList.add("active");
  }, 4500);
}
