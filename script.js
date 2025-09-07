// Quotes Array
const quotes = [
  "Be — don’t try to become.",
  "Courage is a love affair with the unknown.",
  "Friendship is the purest love.",
  "Truth is not something outside to be discovered, it is something inside to be realized.",
  "To avoid pain, they avoid pleasure. To avoid death, they avoid life.",
  "Be realistic: Plan for a miracle.",
  "Life begins where fear ends.",
  "Laughter is the greatest meditation.",
  "Don’t seek, don’t search, don’t ask, don’t knock, don’t demand – relax.",
  "Awareness is the greatest agent for change."
];

// Aura Colors for Background
const auraColors = [
  "linear-gradient(to bottom, #4c1d95, #6b21a8)",
  "linear-gradient(to bottom, #1e3a8a, #4338ca)",
  "linear-gradient(to bottom, #0f172a, #3b82f6)",
  "linear-gradient(to bottom, #7c3aed, #a78bfa)",
  "linear-gradient(to bottom, #db2777, #f472b6)"
];

// Generate Quote
const quoteEl = document.getElementById("quote");
const button = document.getElementById("newQuote");

button.addEventListener("click", () => {
  // Random quote
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteEl.innerText = quotes[randomIndex];

  // Change aura background
  const randomAura = auraColors[Math.floor(Math.random() * auraColors.length)];
  document.body.style.background = randomAura;

  // Generate floating lotus
  generateLotus();
});

// Generate Floating Lotus
function generateLotus() {
  const container = document.getElementById("lotus-container");
  const lotus = document.createElement("img");

  // Lotus Image
  lotus.src = "assests/lotuss.webp";
  lotus.classList.add("lotus");
  lotus.style.left = Math.random() * 100 + "vw";
  lotus.style.width = 40 + Math.random() * 40 + "px";
  lotus.style.animationDuration = (6 + Math.random() * 6) + "s";

  container.appendChild(lotus);

  setTimeout(() => lotus.remove(), 12000);
}

// Initial lotus generation
for (let i = 0; i < 5; i++) {
  setTimeout(generateLotus, i * 1000);
}
