let numberContainer = document.querySelector(".rating-state__number-container");
let rateNumber = document.querySelector(".thankyou-state__result--number");
let thankYouState = document.querySelector(".thankyou-state");
let ratingState = document.querySelector(".rating-state");
let submitBtn = document.querySelector(".rating-state__button");

//Obtenemos el valor seleccionado con el eevento click y validamos que lo seleccionado este en el rango necesitado, si esto se cumple se actualizara el mensaje en la tajeta de resultado.
numberContainer.addEventListener("click", (event) => {
  let numberSelected = event.target.innerText;
  rateNumber.innerText = numberSelected;
  if (numberSelected > 0 || numberSelected <= 5) {
    submitBtn.addEventListener("click", () => {
      ratingState.style.display = "none";
      thankYouState.style.display = "flex";
    });
  }
});
