var typed = new Typed(".text", {
  strings: [
    "<span style='color: #bebebe;'>Data Engineer</span>",
    "<span style='color: #bebebe;'>Business Intelligence Specialist</span>",
    "<span style='color: #bebebe;'>Data Scientist</span>"
  ],
  typeSpeed: 90,
  backSpeed: 70,
  backDelay: 1200,
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

// Smart Project Assistant
const assistant = document.getElementById("assistant");
const toggle = document.getElementById("assistant-toggle");
const bodyEl = document.getElementById("assistant-body");
const inputEl = document.getElementById("assistant-input");

toggle.addEventListener("click", () => {
  assistant.style.display = assistant.style.display === "flex" ? "none" : "flex";
});

inputEl.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && inputEl.value.trim() !== "") {
    const msg = inputEl.value.trim();
    appendMessage("user", msg);
    inputEl.value = "";
    setTimeout(() => appendMessage("bot", getAssistantReply(msg)), 600);
  }
});

function appendMessage(sender, text) {
  const msgDiv = document.createElement("div");
  msgDiv.classList.add("assistant-msg", sender);
  msgDiv.innerHTML = text;
  bodyEl.appendChild(msgDiv);
  bodyEl.scrollTop = bodyEl.scrollHeight;
}

function getAssistantReply(message) {
  const msg = message.toLowerCase();

  // --- Greetings ---
  if (msg.includes("hello") || msg.includes("hi"))
    return "Hello, I’m your portfolio assistant. You can ask about Yunus Emre Türker’s background, projects, or skills.";

  // --- About Yunus ---
  if (msg.includes("who") && msg.includes("yunus"))
    return "Yunus Emre Türker is an Electrical-Electronics Engineer specializing in Data Science and Business Intelligence. He builds scalable data systems that turn complex information into actionable insights.";

  if (msg.includes("about") && msg.includes("you"))
    return "Yunus focuses on transforming data into business value through analytical models, ETL workflows, and interactive dashboards.";

  if (msg.includes("experience") || msg.includes("career"))
    return "He has over three years of experience in data engineering and business intelligence, using Python, SQL, and machine learning to deliver analytical solutions.";

  if (msg.includes("current") && msg.includes("work"))
    return "He currently leads the Business Intelligence and Data Analytics team at Acıbadem Healthcare Group, improving automation and data reliability.";

  // --- Philosophy & Approach ---
  if (msg.includes("approach") || msg.includes("principle"))
    return "His approach combines analytical precision with creative problem solving to produce clear, data-driven insights.";

  if (msg.includes("learn") || msg.includes("development") || msg.includes("growth"))
    return "He values continuous learning and keeps up with emerging data and engineering technologies.";

  // --- Projects ---
  if (msg.includes("surgical"))
    return "Surgical Gross Margin Analytics automates surgery-based profit calculations and improves reporting accuracy through intelligent data normalization.";

  if (msg.includes("check"))
    return "Check-Up Revenue and Retention Analytics links post-check-up patient activity to measurable revenue and loyalty outcomes.";

  if (msg.includes("billing"))
    return "Billing and Collections Dashboard provides real-time visibility into revenue, invoices, and cash flow performance.";

  if (msg.includes("project"))
    return "You can ask about the Surgical, Check-Up, or Billing projects for more information.";

  // --- Skills & Tools ---
  if (msg.includes("skill") || msg.includes("stack") || msg.includes("tech"))
    return "Core skills: Python, SQL, Pandas, ETL, Data Modeling, Machine Learning, and BI tools like MicroStrategy and Power BI.";

  if (msg.includes("language"))
    return "He primarily codes in Python and SQL, and uses HTML, CSS, and JavaScript for data visualization and web-based analytics.";

  // --- Contact & Links ---
  if (msg.includes("contact") || msg.includes("linkedin"))
    return "You can reach Yunus via LinkedIn — the link is available in the top navigation bar.";

  if (msg.includes("cv") || msg.includes("resume"))
    return "His CV can be viewed or downloaded from the top navigation bar.";

  // --- Motivation / Passion ---
  if (msg.includes("passion") || msg.includes("interest"))
    return "Yunus is passionate about solving data-driven business challenges and designing scalable analytics solutions.";

  if (msg.includes("why") && msg.includes("data"))
    return "Because data connects engineering with decision-making — transforming complexity into clarity.";

  // --- Default ---
  return "You can ask about Yunus Emre Türker’s projects, experience, or skills — I’ll keep my answers clear and concise.";
}


document.querySelector("a[href='#home']").addEventListener("click", () => scrollToSection(".home"));
document.querySelector("a[href='#about']").addEventListener("click", () => scrollToSection(".about"));
