import {postData} from './api.js';
import {pristine} from './validation.js';
import {showSuccessMessage} from './success.js';
import {showErrorMessage} from './error.js';
import {resetEffect} from './overlayEffect.js';

const form = document.querySelector('.img-upload__form');
const uploadFileInput = document.querySelector('#upload-file');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const imgUploadForm = document.querySelector('#upload-select-image');
const imgUploadCancelButton = document.querySelector('#upload-cancel');
const imgUploadSubmit = document.querySelector('#upload-submit');

uploadFileInput.addEventListener('change', function(evt) {
  const img = document.querySelector('.img-upload__preview > img');
  img.src = window.URL.createObjectURL(evt.target.files[0]);
  uploadOverlay.classList.remove('hidden');
});

const closeUploadOverlay = function() {
  uploadOverlay.classList.add('hidden');
  imgUploadForm.reset();
  resetEffect();
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

form.addEventListener('submit', function(evt) {
  evt.preventDefault();
  blockSubmitButton();
  if (pristine.validate) {
    postData(
        () => {
          closeUploadOverlay();
          showSuccessMessage();
        },
        () => {
          closeUploadOverlay();
          showErrorMessage();
        },
        new FormData(evt.target));
  };
  unblockSubmitButton();
});

window.addEventListener('beforeunload', function() {
  uploadFileInput.removeEventListener('change', onUploadFileInputChange);
  imgUploadCancelButton.removeEventListener('click', closeUploadOverlay);
  document.removeEventListener('keydown', onOverlayEscKeydown);
  imgUploadForm.removeEventListener('submit');
});
