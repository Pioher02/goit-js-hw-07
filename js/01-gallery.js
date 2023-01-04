import { galleryItems } from "./gallery-items.js";
// Change code below this line

import "./basicLightbox.min.js";

// inserta imagenes
const galleryList = document.querySelector(".gallery");

const galleryContent = galleryItems
  .map(
    (galleryItem) =>
      `<div class="gallery__item"><a class="gallery__link" href=${galleryItem.original}> <img class="gallery__image" src=${galleryItem.preview} data-source=${galleryItem.original} alt=${galleryItem.description}/></a></div>`
  )
  .join("");

galleryList.insertAdjacentHTML("afterbegin", galleryContent);

galleryList.addEventListener("click", bigImage);

function bigImage(event) {
  //Evita que se descargue
  event.preventDefault();

  //Crea el modal
  const instance = basicLightbox.create(`
      <div class="modal">
          <img src=${event.target.dataset.source} />
      </div>
  `);

  instance.show();
}

console.log(galleryItems);
