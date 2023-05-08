const successMessageTemplate = document.querySelector('#success');

const showSuccessMessage = function() {
  const successMessage = successMessageTemplate.content.cloneNode(true);
  const successButton = successMessage.querySelector('.success__button');
  document.body.appendChild(successMessage);

  successButton.addEventListener('click', function() {
    hideSuccessMessage();
  });

  document.addEventListener('keydown', function(evt) {
    if (evt.key == 'Escape') {
      hideSuccessMessage();
    }
  });
};

const hideSuccessMessage = function() {
  const message = document.querySelector('.success');
  document.body.removeChild(message);
};

export {showSuccessMessage, hideSuccessMessage};
