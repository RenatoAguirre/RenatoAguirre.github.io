const button = document.querySelector("#button");

button.addEventListener("click", function() {
  const input = document.querySelector("#input");
  const container = document.querySelector("#content");
  const texto= document.createElement("p");
  texto.textContent = input.value;
  container.appendChild(texto)
});
