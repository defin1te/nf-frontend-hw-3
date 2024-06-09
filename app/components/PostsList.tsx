'use client';

import React, { useEffect, useState } from 'react';
import { fetchPosts } from '../api';
import Link from 'next/link';

const PostsList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const postsData = await fetchPosts();
        setPosts(postsData);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    getPosts();
  }, []);

  return (
    <div className="posts-list">
      {posts.map(post => (
        <div key={post.id} className="post-item">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <Link href={`/posts/${post.id}`}>
            Read more
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PostsList;
