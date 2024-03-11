const button = document.querySelector("#button");

button.addEventListener("click", function() {
  const input = document.querySelector("#input");
  const container = document.querySelector("#textToReplace");
  container.textContent = input.value;
  container.appendChild(texto)
});
