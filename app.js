// Typing Animation
var typed = new Typed(".text", {
  strings: ["Frontend Developer", "Backend Developer", "Electrical Electronics Engineer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// Global Variables
let element = document.querySelector("#veri");
let addHero = document.querySelector("#ekle");
let new_ul = document.querySelector("ul#Mid-Lane");
let clickCount = 0;

// Function to Clear Local Storage After 20 Clicks
function checkClicks() {
  if (clickCount === 20) {
    localStorage.clear();
    clickCount = 0;
    alert('Local storage cleared!');
  }
}

addHero.addEventListener("click", function () {
  let new_li = document.createElement("li");
  new_li.innerHTML = element.value;
  new_ul.appendChild(new_li);
  element.value = "";
  localStorage.setItem("heroes", new_ul.innerHTML);
  clickCount++;
  checkClicks();
});

window.addEventListener("load", function () {
  if (localStorage.getItem("heroes")) {
    new_ul.innerHTML = localStorage.getItem("heroes");
  }
});

// Function to Animate Text on Page Load
function animateText() {
  var typed = new Typed(".typing-text", {
    strings: ["Frontend Developer", "Backend Developer", "Electrical Electronics Engineer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
  });
}

// Event Listeners
window.addEventListener("load", animateText);

// Scroll to Section when Buttons Clicked
function scrollToSection(sectionID) {
  const section = document.querySelector(sectionID);
  if (section) {
    const headerOffset = 50;
    const elementPosition = section.getBoundingClientRect().top;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
}

document.querySelector("a[href='#about']").addEventListener("click", function () {
  scrollToSection("#about");
});

document.querySelector("a[href='#skills']").addEventListener("click", function () {
  scrollToSection("#skills");
});
