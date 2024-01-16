console.log("Witam wszystkich");

let body = document.querySelector(".body");
let button = document.querySelector(".body__button");

button.addEventListener("click", () => {
  body.classList.toggle("body__bright");
});
