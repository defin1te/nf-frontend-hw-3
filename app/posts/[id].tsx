'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { Post } from '../types'; 

const PostDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    if (id) {
      const fetchPost = async () => {
        try {
          const response = await axios.get(`https://dummyjson.com/posts/${id}`);
          setPost(response.data);
        } catch (error) {
          console.error('Error fetching post:', error);
        }
      };
      fetchPost();
    }
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className="post-detail p-4">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-lg text-gray-700">{post.body}</p>
      <button onClick={() => router.back()} className="text-blue-500 hover:underline mt-4">Go back</button>
    </div>
  );
};

export default PostDetail;
