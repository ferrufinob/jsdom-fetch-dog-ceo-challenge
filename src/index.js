let breeds = [];

document.addEventListener("DOMContentLoaded", () => {
  fetchImages();
  fetchBreeds();
  getSelectedValue();

  // dropDown();
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
  liElement.id = "list";
  liElement.innerText = breed;
  breedUL.appendChild(liElement);
}

// Challenge 3
window.addEventListener("click", function (event) {
  const target = event.target; //li
  if (target.tagName !== "LI") {
    return; // not li stop the functin
  }
  const color = target.style.color;
  target.style.color = color ? "" : "red"; // color is set then clear it, otherwise set to 'red'
});

// Challenge 4

function getSelectedValue() {
  const selectValue = document.querySelector("#breed-dropdown");
  selectValue.addEventListener("change", function () {
    const ul = document.querySelector("#dog-breeds");
    // clear previous list first
    ul.innerText = "";
    // what im displaying after its cleared
    let data = filter(`${this.value}`);
    return data;
  });
}
// solution using filter with startsWith
function filter(letter) {
  const filtered = breeds.filter((breed) => breed.startsWith(letter));
  return filtered.forEach((filter) => addBreed(filter));
}

//################################################################//
// solution using indexOf
// function filter(letter) {
//   let results = [];
//   let len = breeds.length;
//   for (let i = 0; i < len; i++) {
//     if (breeds[i].indexOf(letter) == 0) results.push(breeds[i]); //if the letter at index 0 matches that breed then its a match
//   }
//   return results;
// }
