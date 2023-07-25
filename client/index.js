






//Form Elements
const username = document.getElementById('username');
const title = document.getElementById('title');
const genre = document.getElementById('genre');
const year = document.getElementById('year');
const review = document.getElementById('review');

const cardContainer = document.getElementById('animeCards');

//Buttons
const submit = document.getElementById('submit');
const viewBtn = document.getElementById('view');

//Server Variables
const url = 'http://localhost:3000/anime';






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

        fetch(url)
        .then(resp => resp.json())
        .then(data => data.forEach(anime => {
        console.log(anime);
        let card = document.createElement('div');
        card.className = 'card shadow cursor-pointer';

        let cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        let user = document.createElement('h5');
        user.innerText = 'User: ' + anime.name;
        user.className = 'card-title';

        let title = document.createElement('h5');
        title.innerText = anime.title;
        title.className = 'card-title';

        let genre = document.createElement('h5');
        genre.innerText = anime.genre;
        genre.className = 'card-title';

        let year = document.createElement('h5');
        year.innerText = anime.year;
        year.className = 'card-title';

        let review = document.createElement('h5');
        review.innerText = anime.review;
        review.className = 'card-title';

        cardBody.appendChild(user);
        cardBody.appendChild(title);
        cardBody.appendChild(genre);
        cardBody.appendChild(year);
        cardBody.appendChild(review);
        card.appendChild(cardBody);
        cardContainer.appendChild(card);
        })
        .catch(err => console.log(err)))
        
}

submit.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(username.value, title.value, genre.value, year.value, review.value);
    const anime = {
        name: username.value,
        title: title.value,
        genre: genre.value,
        year: year.value,
        review: review.value
    }
    createAnime(anime);
})


viewBtn.addEventListener('click', viewAnime);