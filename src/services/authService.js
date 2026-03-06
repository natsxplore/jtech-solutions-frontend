import api from './api';

const saveToken = (response) => {
  const token = response.data?.data?.token;

  if (token) {
    localStorage.setItem('auth_token', token);
  }

  return response.data;
};

let isFetchingUser = false;
let activeUserPromise = null;

export const authService = {
  login: async (email, password) => {
    const response = await api.post('/login', { email, password });
    return saveToken(response);
  },

  logout: async () => {
    try {
      await api.post('/logout');
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      localStorage.removeItem('auth_token');
      isFetchingUser = false;
      activeUserPromise = null;
    }
  },

  getCurrentUser: async () => {
    if (isFetchingUser && activeUserPromise) {
      return activeUserPromise;
    }

    isFetchingUser = true;

    activeUserPromise = api.get('/me')
      .then((response) => {
        isFetchingUser = false;
        activeUserPromise = null;
        return response.data;
      })
      .catch((error) => {
        isFetchingUser = false;
        activeUserPromise = null;
        throw error;
      });

    return activeUserPromise;
  },

  register: async (userData) => {
    const response = await api.post('/register', userData);
    return saveToken(response);
  },
};
