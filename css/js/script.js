console.log("cześć");

let przycisk = document.querySelector(".przycisk");
let zdjęcie = document.querySelector(".foto");

przycisk.addEventListener("click", () => { zdjęcie.remove(); });

