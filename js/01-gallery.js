/* 
1. Створення і рендер розмітки на підставі масиву даних galleryItems і наданого 
        шаблону елемента галереї.
2. Реалізація делегування на ul.gallery і отримання url великого зображення.
3. Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. 
4. Використовуй CDN сервіс jsdelivr 
       і додай у проект посилання на мініфіковані (.min) файли бібліотеки.
5. Відкриття модального вікна по кліку на елементі галереї. 
6. Для цього ознайомся з документацією і прикладами.
7 .Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. 
        Використовуй готову розмітку модального вікна 
            із зображенням з прикладів бібліотеки basicLightbox.
*/

import { galleryItems } from "./gallery-items.js";

const list = document.querySelector(".gallery");
createMarckup(galleryItems);
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

const handelClick = (eve) => {
  eve.preventDefault();
  basicLightbox
    .create(`<img width="1400" height="900" src=${eve.target.dataset.source}>`)
    .show();
};
list.addEventListener("click", handelClick);

// list.addEventListener("keydown", (event) => {
//   if (event.key !== "Escape") {
//     return;
//   }
//   console.log("escepe");
//   basicLightbox.close();
// });
