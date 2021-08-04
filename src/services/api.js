import axios from 'axios';

// http://localhost:3000/employess

const api = axios.create({
  baseURL: 'http://localhost:3000'
});

export default api;