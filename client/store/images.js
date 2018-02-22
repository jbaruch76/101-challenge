import axios from 'axios';
import api from '../../secrets';

// Action Types

const GET_IMAGES = 'GET_IMAGES';

// Action Creators

const getImages = images => ({ type: GET_IMAGES, images });

// Thunk Creators

export const fetchImages = function(keyword) {
  return function thunk(dispatch) {
    return axios.get('https://pixabay.com/api/?key=' + api + '&q=' + keyword + '&per_page=200')
      .then(res => res.data)
      .then(images => dispatch(getImages(images)))
      .catch(err => console.log(err));
  };
};


// Reducer

export default function(state = [], action) {
  switch (action.type) {
    case GET_IMAGES:
      return action.images;
    default:
      return state;
  }
}
