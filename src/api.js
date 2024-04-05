import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001' // Assuming your Node.js server is running on localhost:3001
});

export const getUsers = async () => {
  try {
    const response = await api.get('/api/users'); // Just specify the path relative to baseURL
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export default api;
