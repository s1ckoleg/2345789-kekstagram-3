const smallerButton = document.querySelector(".scale__control--smaller");
const biggerButton = document.querySelector(".scale__control--bigger");
const scaleInput = document.querySelector(".scale__control--value");
const imgElement = document.querySelector(".img-upload__preview");

const step = 25;

let isScaleValid = function (value) {
  let minValue = 25;
  let maxValue = 100;
  if (value >= minValue && value <= maxValue) {
    return true;
  } else {
    return false;
  }
}

smallerButton.addEventListener('click', function () {
  const currentScale = parseInt(scaleInput.value, 10);
  let newValue = currentScale - step;
  if (isScaleValid(newValue)) {
    scaleInput.value = `${newValue}%`;
    imgElement.style = `transform: scale(${newValue / 100})`;
  }
})

biggerButton.addEventListener('click', function () {
  const currentScale = parseInt(scaleInput.value, 10);
  let newValue = currentScale + step;
  if (isScaleValid(newValue)) {
    scaleInput.value = `${newValue}%`;
    imgElement.style = `transform: scale(${newValue / 100})`;
  }
})
