function searchVCharacters(pageNumber = 1) {
  const URL = `https://the-one-api.dev/v2/character?limit=20&page=${pageNumber}`;
  const options = {
    headers: {
      Authorization: 'Bearer GAepmfdXiazfYX4VUu4M',
    },
  };
  return fetch(URL, options).then(r => r.json());
}

export default searchVCharacters;
