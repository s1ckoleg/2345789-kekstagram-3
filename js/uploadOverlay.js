const uploadFileInput = document.querySelector("#upload-file");
const uploadOverlay = document.querySelector(".img-upload__overlay");
const imgUploadForm = document.querySelector("#upload-select-image");
const imgUploadCancelButton = document.querySelector("#upload-cancel")

uploadFileInput.addEventListener('change', function () {
  uploadOverlay.classList.remove("hidden");
})

let closeUploadOverlay = function () {
  uploadOverlay.classList.add("hidden");
  imgUploadForm.reset();
}

imgUploadCancelButton.addEventListener('click', function () {
  closeUploadOverlay();
})

document.addEventListener('keydown', function(evt) {
  if (evt.key == "Escape") {
    closeUploadOverlay();
  }
})

imgUploadForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  imgUploadForm.submit();
  closeUploadOverlay();
})
