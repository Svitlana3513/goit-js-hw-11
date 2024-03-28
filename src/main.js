import { getImages } from "./js/pixabay-api";
import { imageTemplate } from "./js/render-functions";

import iziToast from 'izitoast';
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css"

const inputForm = document.querySelector('.form');
const imageGallery = document.querySelector('.gallery');
const imagePreload = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captionDelay: 250,
});
 
inputForm.addEventListener('submit', event => {
    event.preventDefault();
    const query = event.target.elements.image.value.trim();
    imageGallery.innerHTML = '<div class="loader"></div>';
    if (query) {
            getImages(query).then(image => {
            if (!image.hits.length) {
                iziToast.error({
                    position: 'topRight',
                    color: '#EF4040',
                    messageColor: '#FAFAFB',
                    maxWidth: '432px',
                    height: '88',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                });
            }
            const markup = imageTemplate(image.hits);
            imageGallery.innerHTML = markup;
            lightbox.refresh();
        })
            .catch(error =>
                console.log(error));
    } else {
        iziToast.error({
                    position: 'topRight',
                    color: '#EF4040',
                    messageColor: '#FAFAFB',
                    maxWidth: '432px',
                    height: '88',
                    message: 'Please, fill the form!',
                });
        
    }
    inputForm.reset();
    })


    




