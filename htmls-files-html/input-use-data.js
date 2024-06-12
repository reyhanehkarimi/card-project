import { thanksSectionHandler } from "./submit-data.js";

document.addEventListener("DOMContentLoaded", () => {
  const cardHolderName = document.querySelector("#placeholder-name1");
  const cardNumber = document.querySelector("#placeholder-name2");

  const mm = document.querySelector("#placeholder-num1");
  const yy = document.querySelector("#placeholder-num2");
  const cvc = document.querySelector("#placeholder-num3");

  const form = document.querySelector("#input-container");

  const maxLengthForCardName = 30;
  const maxLengthForCardNumber = 19;
  const maxLengthForMm = 2;
  const maxLengthForYy = 2;
  const maxLengthForCvc = 3;

  function limitedInput(inputElement, maxLength) {
    inputElement.addEventListener("input", () => {
      if (inputElement.value.length > maxLength) {
        inputElement.value = inputElement.value.slice(0, maxLength);
      }
    });
  }

  limitedInput(cardHolderName, maxLengthForCardName);
  limitedInput(cardNumber, maxLengthForCardNumber);
  limitedInput(mm, maxLengthForMm);
  limitedInput(yy, maxLengthForYy);
  limitedInput(cvc, maxLengthForCvc);

  cardNumber.addEventListener("input", (e) => {
    let value = e.target.value.split(" ").join("");
    let formatValue = "";
    for (let i = 0; i < value.length; i++) {
      if (i > 0 && i % 4 === 0) {
        formatValue += " ";
      }
      formatValue += value[i];
    }
    e.target.value = formatValue;
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    document.querySelectorAll(".error").forEach((errorElement) => {
      errorElement.textContent = "";
    });

    let hasError = false;

    if (!cardHolderName.value) {
      document.querySelector("#error-name1").textContent = "Can't be blank";
      hasError = true;
    }

    let cardNumberValue = cardNumber.value.split(" ").join("");
    let isCardNumberValid = true;

    if (cardNumberValue.length !== 16) {
      isCardNumberValid = false;
    } else {
      for (let i = 0; i < cardNumberValue.length; i++) {
        if (isNaN(cardNumberValue[i])) {
          isCardNumberValid = false;
          break;
        }
      }
    }

    if (!cardNumberValue) {
      document.querySelector("#error-name2").textContent = "Can't be blank";
      hasError = true;
    } else if (cardNumberValue.length !== 16) {
      document.querySelector("#error-name2").textContent =
        "Number should be 16 characters!";
      hasError = true;
    } else if (!isCardNumberValid) {
      document.querySelector("#error-name2").textContent =
        "Wrong format, numbers only";
      hasError = true;
    }

    if (!mm.value) {
      document.querySelector("#error-num1").textContent = "Can't be blank";
      hasError = true;
    } else {
      let month = Number(mm.value);
      if (isNaN(month) || mm.value.length !== 2 || month < 1 || month > 12) {
        document.querySelector("#error-num1").textContent = "Invalid month";
        hasError = true;
      }
    }

    if (!yy.value) {
      document.querySelector("#error-num2").textContent = "Can't be blank";
      hasError = true;
    } else {
      let year = Number(yy.value);
      if (isNaN(year) || yy.value.length !== 2) {
        document.querySelector("#error-num2").textContent = "Invalid year";
        hasError = true;
      }
    }

    if (!cvc.value) {
      document.querySelector("#error-num3").textContent = "Can't be blank";
      hasError = true;
    } else {
      let cvcValue = Number(cvc.value);
      if (isNaN(cvcValue) || cvc.value.length !== 3) {
        document.querySelector("#error-num3").textContent = "Invalid CVC";
        hasError = true;
      }
    }

    if (!hasError) {
      thanksSectionHandler();
      // forms.style.display = "none";
      thanksSection.style.display = "flex";
    }
  });
});
