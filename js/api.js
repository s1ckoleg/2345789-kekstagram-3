const API_GET_ENDPOINT = 'https://27.javascript.pages.academy/kekstagram-simple/data';
const API_POST_ENDPOINT = 'https://27.javascript.pages.academy/kekstagram-simple';

const getData = function(onSuccess, onFail) {
  fetch(API_GET_ENDPOINT)
      .then((response) => {
        return response.json();
      })
      .then((pictureInfo) => {
        onSuccess(pictureInfo);
      })
      .catch(() => {
        onFail();
      });
};

const postData = function(onSuccess, onFail, data) {
  fetch(API_POST_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data,
  }).then((response) => {
    if (response.ok) {
      onSuccess();
    } else {
      onFail();
    }
  }).catch(() => {
    onFail();
  });
};

export {getData, postData};
