import axios from 'axios';

const API_KEY = 'fba7f28daee427f95940fa6c0eb25b63';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const END_POINTS = {
  trending: '/trending/movie/week',
  querySearch: '/search/movie',
  movieDetails: '/movie',
  movieCredits: '/credits',
  movieReviews: '/reviews',
};

export async function getMovies(page = 1) {
  const res = await axios.get(
    `${END_POINTS.trending}?api_key=${API_KEY}&page=${page}&language=en-US&include_adult=false`
  );

  return res.data.results;
}

export async function fetchMoviesByQuery(query, page = 1) {
  const res = await axios.get(
    `${END_POINTS.querySearch}?api_key=${API_KEY}&page=${page}&query=${query}&language=en-US&include_adult=false`
  );

  return res.data.results;
}

export async function fetchMoviesDetails(id) {
  const res = await axios.get(
    `${END_POINTS.movieDetails}/${id}?api_key=${API_KEY}&language=en-US`
  );

  return res.data;
}

export async function fetchMoviesCredits(id) {
  const res = await axios.get(
    `/movie/${id}${END_POINTS.movieCredits}?api_key=${API_KEY}&language=en-US`
  );

  return res.data.cast;
}

export async function fetchMoviesReviews(id, page = 1) {
  const res = await axios.get(
    `/movie/${id}${END_POINTS.movieReviews}?api_key=${API_KEY}&language=en-US&page=${page}`
  );

  return res.data.results;
}
