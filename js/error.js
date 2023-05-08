const errorMessageTemplate = document.querySelector('#error');

const showErrorMessage = function() {
  const errorMessage = errorMessageTemplate.content.cloneNode(true);
  const errorInner = errorMessage.querySelector('.error__inner');
  errorInner.style.color = '#ffffff';
  errorInner.style['background-color'] = '#424949';
  document.body.appendChild(errorMessage);
  const errorButton = document.querySelector('.error__button');

  errorButton.addEventListener('click', function() {
    hideErrorMessage();
  });

  document.addEventListener('keydown', function(evt) {
    if (evt.key == 'Escape') {
      hideErrorMessage();
    }
  });
};

const hideErrorMessage = function() {
  const message = document.querySelector('.error');
  document.body.removeChild(message);
};

export {showErrorMessage, hideErrorMessage};
