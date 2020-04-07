import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://192.168.0.25:3333',
  // baseURL: 'http://10.0.3.2:3333',
  baseURL: 'http://25.85.112.91:3333',
});

export default api;
