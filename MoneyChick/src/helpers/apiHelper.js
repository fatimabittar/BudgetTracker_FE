import axios from 'axios';

const BASE_URL = 'https://moneychick.onrender.com/api';

// Set up default headers for API requests
axios.defaults.headers.common['Content-Type'] = 'application/json';

// Function to make a DELETE request
export const remove = async (url, data, onSuccess, onError) => axios.delete(`${BASE_URL}/${url}`, data)
  .then((res) => onSuccess(res.data))
  .catch((error) => onError(error));

// Function to make a GET request
export const get = (url, data, onSuccess, onError) => axios.get(`${BASE_URL}/${url}`, data)
  .then((res) => onSuccess(res.data))
  .catch((error) => onError(error));

// Function to make a POST request
export const post = (url, data, onSuccess, onError) => axios.post(`${BASE_URL}/${url}`, data)
  .then((res) => onSuccess(res.data))
  .catch((error) => onError(error));

// Function to make a PUT request
export const put = (url, data, onSuccess, onError) => {
  axios.put(`${BASE_URL}/${url}`, data, {
    headers: { 'Content-Type': 'application/json', }
  })
    .then((res) => {
      onSuccess(res.data);
    })
    .catch((error) => {
      onError(error);
    });
};

// Function to make a Login Post request
export const login = (data, onSuccess, onError) => post('users/login', data, onSuccess, onError);
// Fuction to make a signup Post request
export const signup = (data, onSuccess, onError) => post('users', data, onSuccess, onError);

