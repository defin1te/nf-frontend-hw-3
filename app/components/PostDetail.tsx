'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';  
import { fetchPostById } from '../api';
import { Post } from '../types'; 

const PostDetail = () => {
  const params = useParams();
  const id = params.id; 

  const [post, setPost] = useState<Post | null>(null); 

  useEffect(() => {
    console.log('ID:', id); 
    if (id) {
      const getPost = async () => {
        try {
          const postData = await fetchPostById(Number(id));
          console.log('Post Data:', postData); 
          setPost(postData);
        } catch (error) {
          console.error('Error fetching post:', error);
        }
      };

      getPost();
    }
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="post-detail p-4">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-lg text-gray-700">{post.body}</p>
      <button onClick={() => window.history.back()} className="text-blue-500 hover:underline mt-4">Go back</button>
    </div>
  );
};

export default PostDetail;
