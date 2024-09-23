'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function BookmarkManager() {
  const [bookmarkedId, setBookmarkedId] = useState(null);

  useEffect(() => {
    const storedBookmark = localStorage.getItem('bookmark-chapter-id');
    if (storedBookmark) {
      setBookmarkedId(storedBookmark);
    }
  }, []);

  return (
    <div className='flex flex-col items-center'>
      {bookmarkedId ? (
        <Link href={`/chapters/${bookmarkedId}`}>
          <button className="bg-blue-500 transition-all ease-in-out duration-200 hover:bg-transparent hover:text-black dark:bg-transparent dark:text-[#ACA992] border border-blue-500 dark:border-[#ACA992] dark:hover:text-black dark:hover:bg-[#ACA992] sm:text-sm md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl text-xs text-white px-4 py-2 rounded">
            Go to Bookmarked Chapter
          </button>
        </Link>
      ) : (
        <p className='hidden'>No bookmark found.</p>
      )}
    </div>
  );
}
