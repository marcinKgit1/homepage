{
  const welcome = () => {
    console.log("Witam wszystkich");
  };

  const toggleBackground = () => {
    const body = document.querySelector(".body");
    const changeBackgroundButton = document.querySelector(".body__button");

    body.classList.toggle("body__bright");
  };

  const init = () => {
    changeBackgroundButton.addEventListener("click", toggleBackground);
  };

  welcome();
}
