let breeds = [];
let alpha = [
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

document.addEventListener("DOMContentLoaded", () => {
  fetchImages();
  addAlpha();
  fetchBreeds();
  getSelectedValue();

  // Challenge 1
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
    dogContainer.insertAdjacentHTML(
      "beforeend",
      ` <img style="height:200px" src="${dogImage}"></img>`
    );
  }

  //Challenge 2
  function fetchBreeds() {
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    fetch(breedUrl)
      .then((resp) => resp.json())
      .then((data) => {
        // Object.keys() creates an iterable object(an array) from the Object
        breeds = Object.keys(data.message);
        //iterate the now iterable object and add to list
        breeds.forEach((breed) => addBreed(breed));
      });
  }

  function addBreed(breed) {
    let breedUL = document.querySelector("#dog-breeds");
    breedUL.insertAdjacentHTML("beforeend", `<li class="list">${breed}</li>`);
  }

  function filtering(letter) {
    // create a new array from breeds that returns only the breeds that start with that given letter
    const filtered = breeds.filter((breed) => breed.startsWith(letter));
    console.log(filtered);
    return filtered.forEach((filter) => addBreed(filter));
  }

  //Bonus
  function addAlpha() {
    const selectValue = document.querySelector("#breed-dropdown");
    alpha.forEach((alph) => {
      selectValue.insertAdjacentHTML("beforeend", `<option>${alph}</option>`);
    });
  }

  // Event Listeners

  // Challenge 3
  const liColorChanger = document
    .querySelector("ul")
    .addEventListener("click", (e) => {
      const color = e.target.style.color;
      e.target.style.color = color ? "" : "red";
    });

  liColorChanger;

  // Challenge 4
  function getSelectedValue() {
    const selectValue = document.querySelector("#breed-dropdown");
    selectValue.addEventListener("change", (e) => {
      document.querySelectorAll(".list").forEach((li) => li.remove());
      filtering(e.target.value);
    });
  }
});
