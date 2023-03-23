import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector('.gallery');

galleryEl.innerHTML = createGalleryItems(galleryItems);

function createGalleryItems(galleryData) {
  return galleryData
    .map(item => {
      return `
      <li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
            <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
        </a>
      </li>
      `;
    })
    .join('');
}

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  scrollZoom: false,
  disableRightClick: true,
  overlayOpacity: 0.85,
  showCounter: false,
});
