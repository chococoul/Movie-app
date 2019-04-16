import { SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE, LOADING } from './type';
import axios from 'axios';

import { APIkey } from '../Components/APIKey';

export const searchMovie = text => dispatch => {
  dispatch({
    type: SEARCH_MOVIE,
    payload: text
  });
};

export const fetchMovies = text => dispatch => {
  axios
    .get(`https://www.omdbapi.com/?apikey=${APIkey}&s=${text}`)
    .then(response =>
      dispatch({
        type: FETCH_MOVIES,
        payload: response.data
      })
    )
    .catch(err => console.log(err));
};

export const fetchMovie = id => dispatch => {
  axios
    .get(`https://www.omdbapi.com/?apikey=${APIkey}&i=${id}`)
    .then(response =>
      dispatch({
        type: FETCH_MOVIE,
        payload: response.data
      })
    )
    .catch(err => console.log(err));
};

export const setLoading = () => {
  return {
    type: LOADING
  };
};