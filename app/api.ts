import axios from 'axios';
import { Post } from './types';

const API_URL = 'https://dummyjson.com';

export const fetchPostById = async (id: number): Promise<Post> => {
  try {
    const response = await axios.get<Post>(`${API_URL}/posts/${id}`);
    console.log('API Response:', response.data); // Debugging log
    return response.data;
  } catch (error) {
    console.error('Error fetching post:', error);
    throw error;
  }
};

export const fetchPosts = async (): Promise<Post[]> => {
  try {
    const response = await axios.get<{ posts: Post[] }>(`${API_URL}/posts`);
    return response.data.posts;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};
