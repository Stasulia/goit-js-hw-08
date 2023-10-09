import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const container = document.querySelector('.gallery');
const imagesMarkup = createGallery(galleryItems);

function createGallery(images) {
  return images.map(({preview, original, description}) => ` 
<li class = 'gallery__item'>
    <a class = "gallery__link" href="${original}">
      <img loading = 'lazy' class = "gallery__image" src=" ${preview} " alt=" ${description} " />
    </a>
</li> `
)
.join(" ");
}

container.insertAdjacentHTML('afterbegin', imagesMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
 captionsData: 'alt',
 captionDelay: '250',
});
