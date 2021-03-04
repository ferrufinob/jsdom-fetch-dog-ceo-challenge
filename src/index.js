let breeds = [];
document.addEventListener("DOMContentLoaded", () => {
  fetchImages();
  fetchBreeds();
});

// Challenge 1
// loaded images and displayed
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
  imgElement.style = "height: 200px";
  dogContainer.appendChild(imgElement);
}

//Challenge 2
// loaded breeds and display list
function fetchBreeds() {
  const breedUrl = "https://dog.ceo/api/breeds/list/all";
  fetch(breedUrl)
    .then((resp) => resp.json())
    .then((data) => {
      breeds = Object.keys(data.message);
      breeds.forEach((breed) => addBreed(breed));
    });
}

function addBreed(breed) {
  let breedUL = document.querySelector("#dog-breeds");
  let liElement = document.createElement("li");
  liElement.innerText = breed;
  breedUL.appendChild(liElement);
}

// Challenge 3
// change font when a list item is clicked, make function and add to addBreed?

// Challenge 4
// filter breeds by first letter, how will i display this? do i need to remove previous li's and create new ones?
// breadth-first search???
