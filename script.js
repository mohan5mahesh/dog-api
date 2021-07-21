function getDog() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((listOfDogs) => {
      return listOfDogs.json();
    })
    .then((result) => {
      console.log(result);
      loadDogsImages(result);
    });
}

function loadDogsImages(result) {
  const dogImage = document.createElement("div");
  dogImage.createClass = "listofDogs";
  dogImage.innerHTML = `
    <img class="dogImage" src=${result.message}></img>
    <button class = "Next"onclick="nextDog()">Click Next Dog Image</button>
    `;
  document.body.append(dogImage);
}
getDog();

function nextDog() {
  document.querySelector(".dogImage").remove();
  document.querySelector(".Next").remove();

  getDog();
}
