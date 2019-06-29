import axios from 'axios';

const api = axios.create({
  baseURL: '<YOUR_API_IP>'
});

export default api;