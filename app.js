let api = "https://omdbapi.com/?apikey=1314d788&t=";
let title = document.getElementById('title');
let director = document.getElementById('director');
let actors = document.getElementById('actors');
let collection = document.getElementById('collection');
let desc = document.getElementById('desc');
let award = document.getElementById('award');
let writter = document.getElementById('writter');
let rating = document.getElementById('rating');
let genre = document.getElementById('genre');
let date = document.getElementById('date');
let poster = document.getElementById('poster');


function searchMovie(){

    let movieName = document.getElementById('movieName');
    let query = api+movieName.value;
    fetch(query).then((data) =>{
        return data.json();
    }).then((data) => {
        var T = document.getElementById('toggle');
        T.style.display = "block";
        title.innerText = data.Title;
        director.innerText = data.Director;
        actors.innerText = data.Actors;
        collection.innerText = data.BoxOffice;
        desc.innerText = data.Plot;
        award.innerText = data.Awards;
        writter.innerText = data.Title;
        rating.innerText = data.imdbRating;
        genre.innerText = data.Genre;
        date.innerText = data.Released;
        poster.src = data.Poster;
    })
}
