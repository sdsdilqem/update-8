import React from 'react';
import { Post as PostType } from '../../types/post';
import Post from '../Post';

interface MasonryColumnProps {
  posts: PostType[];
}

export default function MasonryColumn({ posts }: MasonryColumnProps) {
  return (
    <div className="flex flex-col gap-[5px] sm:gap-4">
      {posts.map(post => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
}