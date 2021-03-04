document.addEventListener("DOMContentLoaded", () => {
  fetchImages();
  fetchBreeds();
});

function fetchImages() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  fetch(imgUrl)
    .then((resp) => resp.json())
    .then((data) => {
      data.message.forEach((image) => addImage(image));
    });
}

function addImage(dogImage) {
  let dogContainer = document.querySelector("#dog-image-container");
  let imgElement = document.createElement("img");
  imgElement.src = dogImage;
  dogContainer.appendChild(imgElement);
}

function fetchBreeds() {
  const breedUrl = "https://dog.ceo/api/breeds/list/all";
  fetch(breedUrl)
    .then((resp) => resp.json())
    .then((data) => {
      breeds = Object.keys(data.message);
    });
}

function addBreed(dogBreed) {
  let breedUL = document.querySelector("#dog-breed");
  let liElement = document.createElement("li");
  liElement.value = dogBreed;
  breedUL.appendChild(liElement);
}
