import axios from 'axios';

const BASE_URL = 'https://api.openweathermap.org/data/2.5';
const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 1000,
});
// axios.interceptors.response.use(function (response) {
//     (res => {
//         const api_call = res.data.main;
//         const response = api_call;
//         console.log(response);
//         return response;
//     }, function (error) {
//         // Do something with response error
//         return Promise.reject(error);
//     });
// }
export default instance;