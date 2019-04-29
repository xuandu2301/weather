import axios from 'axios';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';
const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

instance.interceptors.response.use(function (res) {
  // Do something before request is sent
  return res.data;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
}
)
instance.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

export default instance;