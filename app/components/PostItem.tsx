'use client';

import Link from 'next/link';

const PostItem = ({ post }) => {
  return (
    <div className="post-item border-b border-gray-200 pb-4 mb-4">
      <h2 className="text-2xl font-bold">{post.title}</h2>
      <p className="text-gray-700">{post.body}</p>
      <Link href={`/posts/${post.id}`}>
        <span className="text-blue-500 hover:underline">Read more</span>
      </Link>
    </div>
  );
};

export default PostItem;
