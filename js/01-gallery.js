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
  if (!eve.target.classList.contains("gallery__image")) {
    return;
  }
  eve.preventDefault();
  basicLightbox
    .create(`<img width="1400" height="900" src=${eve.target.dataset.source}>`)
    .show();
};
list.addEventListener("click", handelClick);

// test

// const instance = basicLightbox.create(`
//     <div class="modal">
//         <p>A custom modal that has been styled independently. It's not part of basicLightbox, but perfectly shows its flexibility.</p>
//         <input placeholder="Type something">
//         <a>Close</a>
//     </div>
// `, {
//     onShow: (instance) => {
//         instance.element().querySelector('a').onclick = instance.close
//     }
// })

// instance.show()

// const onPressEsc = (event) => {
//   if (event.key !== "Escape") {
//     return
//      console.log(event.key);
//   }
// }
// document.addEventListener("keydown", onPressEsc)
