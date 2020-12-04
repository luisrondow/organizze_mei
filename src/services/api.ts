import axios from "axios";
import https from "https";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

api.defaults.timeout = 10000000;

api.interceptors.request.use(
  async (config) => {
    const token = sessionStorage.getItem("@token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.defaults.headers.post["Content-Type"] = "application/json";

axios.defaults.httpsAgent = new https.Agent({ rejectUnauthorized: false });

export default api;
