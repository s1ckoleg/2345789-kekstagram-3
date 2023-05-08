import {isStringFitInLength} from './util.js';

const form = document.querySelector('.img-upload__form');
const reg = /^#[а-яА-ЯA-Za-zёЁ0-9]{1,17}$/;
const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  errorClass: 'form__item--invalid',
  successClass: 'form__item--valid',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'span',
  errorTextClass: 'form__error',
});

const validateHashtag = (hashtag) => {
  reg.test(hashtag) || isStringFitInLength(hashtag, 0);
};
const validateComment = (comment) => {
  !isStringFitInLength(comment, 19) && isStringFitInLength(comment, 140);
};

pristine.addValidator(
    document.querySelector('.text__hashtags'),
    validateHashtag,
);
pristine.addValidator(
    document.querySelector('.text__description'),
    validateComment,
);

export {pristine};
