/*
  Here is a rough idea for the steps you could take:
*/

// 1. First select and store the elements you'll be working with
// 2. Create your `submit` event for getting the user's search term
// 3. Create your `fetch` request that is called after a submission
// 4. Create a way to append the fetch results to your page
// 5. Create a way to listen for a click that will play the song in the audio play

var displayArea = document.querySelector(".images");
var search = document.querySelector("#search");


// let url = `http://recipepuppyproxy.herokuapp.com/api/?q=${search.value}`;

function ourCallback(e) {
  if (e.keyCode === 13) {
    displayArea.innerHTML = "";
    let url = `https://itunes.apple.com/search?parameterkeyvalue${search.value}`;
    fetch(url).then(function (response) {
      response.json().then(function (data) {
        let results = data.results;
        console.log(results);

        for (var i = 0; i < results.length; i++) {
          let imgSrc = results[i].thumbnail;
          let title = results[i].title;
          let href = results[i].href;
          if (imgSrc === '') {
            displayArea.innerHTML += `<a href ="${href}" target="_blank"><img src="https://s3-ap-southeast-1.amazonaws.com/assets.limetray.com/assets/user_images/menus/original/1442837463_Imgggg.jpg"><div class="caption">${title}</div></a>`;

          } else {
            displayArea.innerHTML += `<a href ="${href}" target="_blank"><img src=${imgSrc}><div class="caption">${title}</div></a>`;


          }
        }

        search.value = "";
      });
    });
  }
}

search.addEventListener("keypress", ourCallback);
search.addEventListener("click", function () {
  displayArea.innerHTML = "";
  search.value = "";
})