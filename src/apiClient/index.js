import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000',
  timeout: 5000,
  headers: { Authorization: 'Bearer'.concat(sessionStorage.getItem('access_token')) },
});

export default axiosInstance;
