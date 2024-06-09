'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { fetchPostById } from '../api';

const PostDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (id) {
      const getPost = async () => {
        try {
          const postData = await fetchPostById(Number(id));
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
    <div className="post-detail">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetail;
