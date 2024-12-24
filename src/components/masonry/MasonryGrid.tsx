import React, { useEffect, useState } from 'react';
import { Post as PostType } from '../../types/post';
import MasonryColumn from './MasonryColumn';
import { useWindowSize } from '../../hooks/useWindowSize';

interface MasonryGridProps {
  posts: PostType[];
}

export default function MasonryGrid({ posts }: MasonryGridProps) {
  const { width } = useWindowSize();
  const [columns, setColumns] = useState<PostType[][]>([]);

  const getColumnCount = () => {
    if (width >= 1280) return 5; // xl
    if (width >= 1024) return 4; // lg
    if (width >= 640) return 3;  // sm
    return 2; // mobile
  };

  useEffect(() => {
    const columnCount = getColumnCount();
    const newColumns: PostType[][] = Array.from({ length: columnCount }, () => []);
    
    // Distribute posts evenly across columns
    posts.forEach((post, index) => {
      const columnIndex = index % columnCount;
      newColumns[columnIndex].push(post);
    });

    setColumns(newColumns);
  }, [posts, width]);

  return (
    <div className="columns-2 sm:columns-3 lg:columns-4 xl:columns-5 gap-[5px] sm:gap-4 space-y-[5px] sm:space-y-4">
      {posts.map(post => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
}