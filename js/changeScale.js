const smallerButton = document.querySelector(".scale__control--smaller");
const biggerButton = document.querySelector(".scale__control--bigger");
const scaleInput = document.querySelector(".scale__control--value");
const imgElement = document.querySelector(".img-upload__preview");

const STEP = 25;

let isScaleValid = function (value) {
  return value >= 25 && value <= 100;
}

let setScale = function (newValue) {
  if (isScaleValid(newValue)) {
    scaleInput.value = `${newValue}%`;
    imgElement.style = `transform: scale(${newValue / 100})`;
  }
}

smallerButton.addEventListener('click', function () {
  const currentScale = parseInt(scaleInput.value, 10);
  let newValue = currentScale - STEP;
  setScale(newValue);
})

biggerButton.addEventListener('click', function () {
  const currentScale = parseInt(scaleInput.value, 10);
  let newValue = currentScale + STEP;
  setScale(newValue);
})
