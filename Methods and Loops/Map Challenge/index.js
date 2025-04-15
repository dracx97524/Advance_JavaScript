import playlistArr from './playlist.js'
/*
Challenge
1. Refactor the code below to use .map()
   instead of the for loop.
   ⚠️ Don't worry about the commas for now.
*/

const playlistHtml = playlistArr.map(function (playlist){
  return `<section class="card">
    <div class="card-start">
        <img src="/images/${playlist.albumArt}">
    </div>
        <div class="card-mid">
            <h4 class="card-title">${playlist.title}</h4>
            <p class="card-artist">${playlist.artist}</p>
        </div>
    <div class="card-end">
        <p class="card-menu">...</p>
    </div>
</section>
    `
})

 

document.getElementById("container").innerHTML = playlistHtml.join(" ");
