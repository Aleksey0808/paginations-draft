const BASE_URL = `https://api.themoviedb.org/3/movie/popular`;
const KEY = `002008aca7b79d6606168d582d26d735`;
export default function searchVCharacters(pageNumber = 1) {
  const URL = `${BASE_URL}?api_key=${KEY}&page=${pageNumber}`;
 
  return fetch(URL).then(response => response.json());
}


