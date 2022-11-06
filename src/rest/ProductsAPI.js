import axios from 'axios';
import { API_URL } from '../settings/Constants';

export const getProducts = async (params) => {
  const apiResponse = await axios.get(API_URL + '/products', { params: params });
  return apiResponse;
}