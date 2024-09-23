'use client'

import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

export default function BookmarkButton({ chapterId }) {
  const [bookmark, setBookmark] = useState(null);

  useEffect(() => {
    const savedBookmark = localStorage.getItem(`bookmark-${chapterId}`);
    if (savedBookmark) {
      setBookmark(savedBookmark);
    }
  }, [chapterId]);

  const handleBookmark = () => {
    const currentScroll = window.scrollY;
    localStorage.setItem(`bookmark-${chapterId}`, currentScroll);
    localStorage.setItem('bookmark-chapter-id', chapterId); // Save chapter ID
    setBookmark(currentScroll);

    // Show success message using Toastify
    toast.success('Bookmark saved successfully!', {
      position: 'top-center',
      autoClose: 2000,
    });
  };

  return (
    <div className='flex flex-col items-center justify-center my-20'>
      <button onClick={handleBookmark} className="bg-blue-500 transition-all ease-in-out duration-200 text-base hover:bg-transparent border-blue-500 hover:text-black dark:bg-transparent text-white dark:text-[#ACA992] border dark:border-[#ACA992] dark:hover:text-black dark:hover:bg-[#ACA992] px-4 py-2 rounded">
        {bookmark ? 'Update Your Bookmark?' : 'Bookmark This Chapter?'}
      </button>
    </div>
  );
}
