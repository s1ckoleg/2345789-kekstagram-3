const imgElement = document.querySelector('.img-upload__preview');
let oldEffect = document.querySelector('#effect-none').value;
const radios = document
    .querySelector('.img-upload__effects')
    .querySelectorAll('input[name="effect"]');

const applyEffect = function() {
  radios.forEach((radio) => {
    if (radio.checked) {
      const newEffect = `effects__preview--${radio.value}`;
      imgElement.classList.remove(oldEffect);
      imgElement.classList.add(newEffect);
      oldEffect = newEffect;
    }
  });
};

radios.forEach((radio) => {
  radio.addEventListener('input', function() {
    applyEffect();
  });
});

const resetEffect = function() {
  imgElement.classList.remove(oldEffect);
  imgElement.classList.add('effects__preview--none');
};

export {resetEffect};
