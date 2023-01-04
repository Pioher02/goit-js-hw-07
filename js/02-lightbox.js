import { galleryItems } from "./gallery-items.js";
// Change code below this line

// inserta imagenes
const galleryList = document.querySelector(".gallery");

const galleryContent = galleryItems
  .map(
    (galleryItem) =>
      `<a class="gallery__item" href=${galleryItem.original}> <img class="gallery__image" src=${galleryItem.preview} alt="" title=${galleryItem.description}/></a>`
  )
  .join("");

galleryList.insertAdjacentHTML("afterbegin", galleryContent);

galleryList.addEventListener("click", bigImage);

function bigImage(event) {
  //Evita que se descargue
  event.preventDefault();
  var lightbox = new SimpleLightbox(".gallery a", { captionType: "title" });
}

console.log(galleryItems);
