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
//import * as basicLightbox from 'basiclightbox'
// Change code below this line

const liEl = document.querySelector(".gallery");
galleryItems.forEach((element) => {
  liEl.insertAdjacentHTML(
    "afterbegin",
    `<li class="gallery__item">
    <a class="gallery__link" href=${element.preview}>
      <img
        class="gallery__image"
        src=${element.preview}
        data-source=${element.original}
        alt=${element.description}
      />
    </a>
  </li>`
  );
});

const handelClick = (eve) => {
  eve.preventDefault();
  basicLightbox
    .create(`<img width="1400" height="900" src=${eve.target.dataset.source}>`)
    .show();
};
liEl.addEventListener("click", handelClick);

// document.addEventListener("keydown", (event) => {
//     if (event.key !== "Escape") {
//       return
//     } instance.close();
//     })
