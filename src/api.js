import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000' 
});

export const getUsers = async () => {
  try {
    const response = await api.get('/api/users'); 
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export default api;
