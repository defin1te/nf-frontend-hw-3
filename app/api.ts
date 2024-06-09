import axios from 'axios';

const API_URL = 'https://dummyjson.com';

export const fetchPostById = async (id: number) => {
  try {
    const response = await axios.get(`${API_URL}/posts/${id}`);
    console.log('API Response:', response.data); // Debugging log
    return response.data;
  } catch (error) {
    console.error('Error fetching post:', error);
    throw error;
  }
};
