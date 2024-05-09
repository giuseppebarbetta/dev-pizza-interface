import axios from 'axios';

export const apiDevPizza = axios.create({
  baseURL: 'http://localhost:3001',
});
