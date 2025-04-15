const favouriteAnime = {
    title: "One piece",
    year: 1997,
    genre: "Adventure, Action",
    mc: "Monkey D. Luffy",
    creator: "Eichiro Oda"
}

// const title = favouriteAnime.title;
// const year = favouriteAnime.year;
// const genre = favouriteAnime.genre;
// const mc = favouriteAnime.mc;
// const creator = favouriteAnime.creator;

const {title,year,genre,mc,creator} = favouriteAnime;
console.log(`My favourite Anime is ${title} main character ${mc} It's an ${genre} film that was directed by ${creator} and released in ${year}.`)