/*
  Here is a rough idea for the steps you could take:
*/

// 1. First select and store the elements you'll be working with
// 2. Create your `submit` event for getting the user's search term
// 3. Create your `fetch` request that is called after a submission
// 4. Create a way to append the fetch results to your page
// 5. Create a way to listen for a click that will play the song in the audio play



// var displayArea = document.querySelector(".images");
var input = document.querySelector("#input");
var submit = document.querySelector("#submit");
var resultsDisplay = document.querySelector(".mainContent");


submit.addEventListener("click", function (e) {


  // if (e.keyCode === 13) {
  let url = "https://itunes.apple.com/search?term=";
  url += input.value;
  console.log(url);

  e.preventDefault();

  axios.get(url)
    .then(function (response) {
      let results = response.data.results;
      resultsDisplay.innerHTML = " ";

      for (var i = 0; i < results.length; i++) {
        let data = results[i];
        let artistName = results[i].artistName;
        let albumArtwork = results[i].artworkUrl100;
        let trackName = results[i].trackName;


        resultsDisplay.innerHTML += `

          <div class="container-results">
            <div class="image-parent">
              <img src="${albumArtwork}">
            </div>

            <div class="content-parent">
              <p>${artistName}</p>
              <p>${trackName}</p>
            </div>
          </div>
          `
      }

    });




});

  // fetch(`https://itunes.apple.com/search?term==${input.value}`)
  //   .then(function (response) {
  //     response.json().then(function (data) {
  //       let results = data.results;
  //       resultsDisplay.innerHTML = " ";

      // })
    // });

// return data.json().then(function(data) {



      // <a href ="${href}" target="_blank"><img src="https://s3-ap-southeast-1.amazonaws.com/assets.limetray.com/assets/user_images/menus/original/1442837463_Imgggg.jpg"><div class="caption">${title}</div></a>`;


    // });
// }
// }

// search.addEventListener("keypress", ourCallback);
// search.addEventListener("click", function () {
//   displayArea.innerHTML = "";
//   search.value = "";

