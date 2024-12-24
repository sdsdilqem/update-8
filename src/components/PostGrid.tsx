import React from 'react';
import Post from './Post';
import type { Post as PostType } from '../types/post';

interface PostGridProps {
  posts: PostType[];
}

export default function PostGrid({ posts }: PostGridProps) {
  // Create columns based on screen size:
  // Mobile: 2 columns
  // Tablet: 3 columns
  // Desktop: 4 columns
  const getColumnCount = () => {
    if (window.innerWidth >= 1024) return 4; // lg breakpoint
    if (window.innerWidth >= 640) return 3;  // sm breakpoint
    return 2; // mobile
  };

  const [columnCount, setColumnCount] = React.useState(getColumnCount());

  React.useEffect(() => {
    const handleResize = () => {
      setColumnCount(getColumnCount());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Distribute posts across columns
  const columns = Array.from({ length: columnCount }, () => [] as PostType[]);
  posts.forEach((post, index) => {
    columns[index % columnCount].push(post);
  });

  return (
    <div className={`
      grid gap-[5px] sm:gap-4
      grid-cols-2    /* Mobile: 2 columns */
      sm:grid-cols-3 /* Tablet: 3 columns */
      lg:grid-cols-4 /* Desktop: 4 columns */
    `}>
      {columns.map((column, columnIndex) => (
        <div key={columnIndex} className="flex flex-col gap-[5px] sm:gap-4">
          {column.map(post => (
            <Post key={post.id} {...post} />
          ))}
        </div>
      ))}
    </div>
  );
}