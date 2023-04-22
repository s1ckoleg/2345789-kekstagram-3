import {data} from './data.js';
import {showPictures} from './pictures.js';
import './uploadOverlay.js';
import './changeScale.js';
import './overlayEffect.js';
import {getData} from './api.js';

getData(
    (pictureInfo) => {
      showPictures(pictureInfo);
    },
    () => {
      showPictures(data);
    },
);
