import { getImages } from "./js/pixabay-api";
import { imagesTemplate } from "./js/render-functions";

import iziToast from 'izitoast';
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css"

getImages().then(images => {
    const markup = imagesTemplate(images);
    console.log(markup);
}
);


