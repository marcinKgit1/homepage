{
  const welcome = () => {
    console.log("Witam wszystkich");
  };

  const toggleBackground = () => {
    const body = document.querySelector(".body");

    body.classList.toggle("body__bright");
  };

  const init = () => {
    const changeBackgroundButton = document.querySelector(".body__button");
    changeBackgroundButton.addEventListener("click", toggleBackground);

    welcome();
  };

  init();
}
