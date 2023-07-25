






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




const createAnime = (anime) => {
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: anime.name,
            title: anime.title,
            genre: anime.genre,
            year: anime.year,
            review: anime.review
        })
    }
    fetch(url, options)
    .then(resp => resp.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
}



const viewAnime = () => {
    return;
}