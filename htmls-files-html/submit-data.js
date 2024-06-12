export function thanksSectionHandler() {
  const numFrontCard = document.querySelector("#num-front-card");
  const nameFrontCard = document.querySelector("#name-front-card");
  const dateFrontCard = document.querySelector("#date-front-card");
  const cvcBackCard = document.querySelector("#cvc-back-card");

  const cardHolderNameInput = document.querySelector("#placeholder-name1");
  const cardNumberInput = document.querySelector("#placeholder-name2");
  const mmInput = document.querySelector("#placeholder-num1");
  const yyInput = document.querySelector("#placeholder-num2");
  const cvcInput = document.querySelector("#placeholder-num3");
  const forms = document.querySelector("#input-container");

  const thanksSection = document.querySelector("#container");
  // const thanksSectionTwo = document.querySelector("#container-icon-complete")
  // const thanksSectionThree = document.querySelector("#icon-complete")
  // const thanksSectionFour = document.querySelector("#added-card")
  // const thanksSectionFive = document.querySelector("#added-card")

  numFrontCard.textContent = cardNumberInput.value;
  nameFrontCard.textContent = cardHolderNameInput.value;
  dateFrontCard.textContent = `${mmInput.value}/${yyInput.value}`;
  cvcBackCard.textContent = cvcInput.value;

  forms.style.display = "none";
  thanksSection.style.display = "flex";
  // thanksSectionTwo.style.display = "flex"
  // thanksSectionThree.style.display = "flex"
  // thanksSectionFour.style.display = "flex"
  // thanksSectionFive.style.display = "flex"
}
