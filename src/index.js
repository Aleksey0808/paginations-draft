import pagination from './js/pagination';
import searchVCharacters from './js/fetchLord';

const list = document.querySelector('.cards');

export function createMarkup(arr) {
  const markup = arr.reduce(
    (acc, { name, race }) => acc + `<li><h2>${name}</h2><h3>${race}</h3></li>`,
    ''
  );
  list.innerHTML = markup;
}

searchVCharacters().then(data => {
  console.log(data);
  createMarkup(data.docs);
  pagination(data.page, data.pages);
});
