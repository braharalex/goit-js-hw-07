import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector('.gallery');

galleryEl.innerHTML = createGalleryItems(galleryItems);
galleryEl.addEventListener('click', fullScreenImage);

function createGalleryItems(galleryData) {
  return galleryData
    .map(item => {
      return `
      <li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
          <img
            class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"
          />
        </a>
      </li>
      `;
    })
    .join('');
}

let modal = {};

function fullScreenImage(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') return;

  const imgSrc = e.target.dataset.source;

  modal = createModal(imgSrc);
  modal.show();
}

function createModal(imgSrc) {
  return basicLightbox.create(`<img src="${imgSrc}" >`, {
    onShow: function () {
      window.addEventListener('keydown', onClosePressKeyEsc);
    },
    onClose: function () {
      window.removeEventListener('keydown', onClosePressKeyEsc);
    },
  });
}

function onClosePressKeyEsc(e) {
  if (e.code === 'Escape') modal.close();
}
