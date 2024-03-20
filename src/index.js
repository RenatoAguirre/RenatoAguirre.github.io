//for tooltips
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

const toggle = document.querySelector("#toggle");
const button = document.querySelector("#button");

button.addEventListener("click", () => {
  const input = document.querySelector("#input");
  const container = document.querySelector("#textToReplace");
  container.textContent = input.value;
});

toggle.addEventListener("click", () => {
  const body = document.body;
  body.classList.toggle("dark-mode");
});
