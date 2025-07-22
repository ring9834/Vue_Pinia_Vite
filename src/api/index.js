import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', // Example API
  timeout: 5000,
});

// Request/Response interceptors (optional)
api.interceptors.request.use((config) => {
  console.log('Request sent:', config.url);
  return config;
});

export default api;