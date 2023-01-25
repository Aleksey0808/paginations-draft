import pagination from './js/pagination';
import searchVCharacters from './js/fetchLord';

const list = document.querySelector('.cards');

export function createMarkup(arr) {
  const markup = arr.reduce(
    (acc, { title, vote_average, poster_path
    }) => acc + `<li class="cards-item"><h2>${title}</h2><img class='movieImag' src="https://image.tmdb.org/t/p/w500${poster_path
    }" alt=""><h3>${vote_average}</h3></li>`,
    ''
  );
  list.innerHTML = markup;
}

searchVCharacters().then(data => {
  console.log(data);
  createMarkup(data.results);
  pagination(data.page, data.total_pages);
});
