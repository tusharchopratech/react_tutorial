import axios from 'axios';
import { API_URL } from '../settings/Constants';

export const autheticateUser = async (userId, password) => {
  if (true) {
    return await authetucateUserWithAxios(userId, password);
  } else {
    return await autheticateUserWithFetch(userId, password);
  }
}

const autheticateUserWithFetch = async (userId, password) => {
  const apiResponse = await fetch(API_URL + '/api/login', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: userId,
      password: password
    })
  });
  return apiResponse;
}

const authetucateUserWithAxios = async (userId, password) => {
  const apiResponse = await axios.post(API_URL + '/api/login', {
    username: userId,
    password: password
  });
  return apiResponse;
}