import axios from 'axios';

export const apiDevPizza = axios.create({
  baseURL: 'http://localhost:3001',
});

apiDevPizza.interceptors.request.use(async config => {
  const userData = await localStorage.getItem('devpizza:userData')
  const token = userData && JSON.parse(userData).token
  config.headers.authorization = `Bearer ${token}`
  return config
})
