/*
  Here is a rough idea for the steps you could take:
*/

// 1. First select and store the elements you'll be working with
// 2. Create your `submit` event for getting the user's search term
// 3. Create your `fetch` request that is called after a submission
// 4. Create a way to append the fetch results to your page
// 5. Create a way to listen for a click that will play the song in the audio play

const URL = "https://itunes.apple.com/search?term=";
var input = document.querySelector("#input");
var submit = document.querySelector("#submit");
var resultsDisplay = document.querySelector(".mainContent");
var audio = document.querySelector("audio");

submit.addEventListener("click", function (e) {
  e.preventDefault();
  let userInput = input.value;
  axios.get(URL + userInput)
    .then(function (response) {
      let results = response.data.results;
      populateHTML(results)
    });
});

resultsDisplay.addEventListener("click", function (e) {

  audio.setAttribute("src", e.target.value);
  // audio.src = e.target.value;\
})


function populateHTML(res) {
  resultsDisplay.innerHTML = " ";

  for (var i = 0; i < res.length; i++) {
    let data = res[i];
    let artistName = res[i].artistName;
    let albumArtwork = res[i].artworkUrl100;
    let trackName = res[i].trackName;
    let preview = res[i].previewUrl;

    resultsDisplay.innerHTML += `

          <div class="container-results">
            <div class="image-parent">
              <img src="${albumArtwork}">
            </div>

            <div class="content-parent">
              <p>${artistName}</p>
              <p>${trackName}</p>
              <button type="button" value=${preview}>Play</button>
            </div>
          </div>
         `
  }
}
