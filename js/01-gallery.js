import { galleryItems } from "./gallery-items.js";

const list = document.querySelector(".gallery");
createMarckup(galleryItems);

//  1. Створення і рендер розмітки на підставі масиву даних galleryItems

function createMarckup(array) {
  const markup = array
    .map(
      ({ description, original, preview }) =>
        `<li class="gallery__item">
     <a class="gallery__link" href=${preview}>
      <img
        class="gallery__image"
         src=${preview}
        data-source=${original}
        alt=${description}
       />
     </a>
  </li>`
    )
    .join("");
  list.insertAdjacentHTML("beforeend", markup);
}

// 5. Відкриття модального вікна по кліку на елементі галереї.

const handelClick = (eve) => {
  if (!eve.target.hasAttribute('src')) {
    return;
  }
  eve.preventDefault();
   basicLightbox
    .create(`<img width="1400" height="900" src=${eve.target.dataset.source}>`)
    .show();
};

list.addEventListener("click", handelClick);
