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

// Function to Scroll to Section
function scrollToSection(sectionID) {
  const section = document.querySelector(sectionID);
  if (section) {
    const headerOffset = 100; // İstediğiniz kaydırma miktarını ayarlayabilirsiniz
    const elementPosition = section.getBoundingClientRect().top;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
}

// Event Listeners for Scroll to Section
document.querySelector("a[href='#home']").addEventListener("click", function () {
  scrollToSection(".home");
});

document.querySelector("a[href='#about']").addEventListener("click", function () {
  scrollToSection(".about");
});

document.querySelector("a[href='#skills']").addEventListener("click", function () {
  scrollToSection(".skills");
});

let element = document.querySelector("#veri");
let addHero = document.querySelector("#ekle");
let new_ul = document.querySelector("ul#Mid-Lane");
let clickCount = 0;

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
