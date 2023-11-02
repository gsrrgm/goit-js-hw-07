import { galleryItems } from "./gallery-items.js";
// import SimpleLightbox from 'simplelightbox';
// import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const list = document.querySelector(".gallery");
createMarckup(galleryItems);
function createMarckup(array) {
  const markup = array
    .map(
      ({ description, original, preview }) =>
  `<li class="gallery__item">
    <a class="gallery__link" href=${original}>
        <img class="gallery__image" src=${preview} alt=${description} />
    </a>
  </li>`
    )
    .join("");
  list.insertAdjacentHTML("beforeend", markup);
}
const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt', overlayOpacity: '0.9', showCounter: 'true', 
    animationSpeed: '450', enableKeyboard: 'true', preloading: 'true',
  });
