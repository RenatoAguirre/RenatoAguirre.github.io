const button = document.querySelector("#button");

button.addEventListener("click", function() {
  const input = document.querySelector("#input");
  const container = document.querySelector("#textToReplace");
  container.textContent = input.value;
  container.appendChild(texto)
});

function toggleDarkMode() {
  const body = document.body;
 body.classList.toggle("dark-mode");
}

const toggle = document.querySelector("#toggle");

toggle.addEventListener("click", toggleDarkMode);