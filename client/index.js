






//Form Elements
const username = document.getElementById('username');
const anime = document.getElementById('title');
const genre = document.getElementById('genre');
const year = document.getElementById('year');
const review = document.getElementById('review');

//Buttons
const submit = document.getElementById('submit');
const viewBtn = document.getElementById('view');



submit.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(username.value, anime.value, genre.value, year.value, review.value);
})