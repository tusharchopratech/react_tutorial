import axios from 'axios';
import { API_URL } from '../settings/Constants';

export const searchProducts = async (params) => {
  const apiResponse = await axios.get(API_URL + '/products/search', { params: params });
  return apiResponse;
}