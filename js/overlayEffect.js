const imgElement = document.querySelector(".img-upload__preview");
let oldEffect = document.querySelector('#effect-none').value;
const radios = document.querySelector('.img-upload__effects').querySelectorAll('input[name="effect"]');

let applyEffect = function () {
  radios.forEach((radio) => {
    if (radio.checked) {
      let newEffect = `effects__preview--${radio.value}`
      imgElement.classList.remove(oldEffect);
      imgElement.classList.add(newEffect);
      oldEffect = newEffect;
    }
  })
}

radios.forEach((radio) => {
  radio.addEventListener('input', function () {
    applyEffect()
  })
})
