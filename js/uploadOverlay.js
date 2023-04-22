import {postData} from './api.js';

const uploadFileInput = document.querySelector('#upload-file');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const imgUploadForm = document.querySelector('#upload-select-image');
const imgUploadCancelButton = document.querySelector('#upload-cancel');
const imgUploadSubmit = document.querySelector('#upload-submit');
const successMessageTemplate = document.querySelector('#success');
const errorMessageTemplate = document.querySelector('#error');

uploadFileInput.addEventListener('change', function() {
  uploadOverlay.classList.remove('hidden');
});

const closeUploadOverlay = function() {
  uploadOverlay.classList.add('hidden');
  imgUploadForm.reset();
};

imgUploadCancelButton.addEventListener('click', function() {
  closeUploadOverlay();
});

document.addEventListener('keydown', function(evt) {
  if (evt.key == 'Escape') {
    closeUploadOverlay();
  }
});

const blockSubmitButton = function() {
  imgUploadSubmit.disabled = true;
};

const unblockSubmitButton = function() {
  imgUploadSubmit.disabled = false;
};

const showSuccessMessage = function() {
  const successMessage = successMessageTemplate.content.cloneNode(true);
  const successButton = document.querySelector('.success__button');
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

const showErrorMessage = function() {
  const errorMessage = errorMessageTemplate.content.cloneNode(true);
  document.body.appendChild(errorMessage);
  const errorButton = document.querySelector('.error__button');

  errorButton.addEventListener('click', function() {
    hideErrorMessage();
    uploadOverlay.classList.remove('hidden');
  });

  document.addEventListener('keydown', function(evt) {
    if (evt.key == 'Escape') {
      hideErrorMessage();
      uploadOverlay.classList.remove('hidden');
    }
  });
};

const hideErrorMessage = function() {
  const message = document.querySelector('.error');
  document.body.removeChild(message);
};

imgUploadForm.addEventListener('submit', function(evt) {
  evt.preventDefault();
  blockSubmitButton();
  postData(
      () => {
        closeUploadOverlay();
        showSuccessMessage();
      },
      () => {
        uploadOverlay.classList.add('hidden');
        showErrorMessage();
      },
      new FormData(evt.target));
  unblockSubmitButton();
});
