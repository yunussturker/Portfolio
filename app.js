var typed = new Typed(".text", {
  strings: [
    "<span style='color: #bebebe;'>Data Scientist</span>",
    "<span style='color: #bebebe;'>Electrical Electronics Engineer</span>"
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

// Scroll to Section
function scrollToSection(sectionID) {
  const section = document.querySelector(sectionID);
  if (section) {
    const headerOffset = 100;
    const elementPosition = section.getBoundingClientRect().top;
    const offsetPosition = elementPosition - headerOffset;
    window.scrollBy({ top: offsetPosition, behavior: 'smooth' });
  }
}

document.querySelector("a[href='#home']").addEventListener("click", () => scrollToSection(".home"));
document.querySelector("a[href='#about']").addEventListener("click", () => scrollToSection(".about"));
