import axios from 'axios';

const getBaseURL = () => {
  const useProxy = import.meta.env.VITE_USE_PROXY !== 'false';
  const isDev = import.meta.env.DEV;
  const apiPrefix = import.meta.env.VITE_API_PREFIX || '/api';
  const apiVersion = import.meta.env.VITE_API_VERSION || 'v1';
  
  if (isDev && useProxy) return `${apiPrefix}/${apiVersion}`;
  
  const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000';
  return `${apiUrl}${apiPrefix}/${apiVersion}`;
};

const api = axios.create({
  baseURL: getBaseURL(),
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('auth_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('auth_token');
    }
    
    if (error.response?.data) {
      const errorData = error.response.data;
      return Promise.reject({
        ...error,
        message: errorData.message || error.message,
        errors: errorData.errors,
        response: error.response,
      });
    }
    
    return Promise.reject(error);
  }
);

export default api;
