document.querySelectorAll(".carousel").forEach((carousel) => {
    debugger
  const items = carousel.querySelectorAll(".history--img");
  const buttonsHtml = Array.from(items, () => {
    return `span class="carousel__button"></span>`;
  });

  carousel.insertAdjacentHTML(
    "beforeend",
    `<div class="carousel__nav"> ${buttonsHtml.join("")}</div`
  );
  const buttons = carousel.querySelectorAll(".carousel__button");

  buttons.forEach(button, (i) => {
    button.addEventListener("click", () => {
      items.forEach((item) =>
        item.classList.remove("history--img_selected")
      );
      buttons.forEach((button) =>
        button.classList.remove("carousel__button--selected")
      );

      items[i].classList.add("history--img_selected");
      button.classList.add("carousel__button--selected");
    });
  });

  console.log(buttonsHtml);
});
