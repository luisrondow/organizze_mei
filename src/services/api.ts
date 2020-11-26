import axios from 'axios';

console.log(process.env)

export const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

api.defaults.timeout = 10000000;

api.interceptors.request.use(
  async (config) => {
    const token = sessionStorage.getItem('@token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

api.defaults.headers.post['Content-Type'] = 'application/json';

export default api;