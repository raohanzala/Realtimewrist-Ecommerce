const cursor = document.querySelector('.cursor')
const body = document.querySelector('body')

body.addEventListener('mousemove', function(e){
  cursor.style.left = e.x + 'px'
  cursor.style.top = e.y + 'px'
})

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header-custom");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);
