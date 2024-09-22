// components/ProgressBar.js

'use client';

import { useState, useEffect } from 'react';

export default function ProgressBar({ chapterId }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const newProgress = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setProgress(newProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed h-20 bottom-0 left-0 right-0 z-40 flex items-center justify-center dark:bg-gradient-to-b dark:from-transparent dark:to-black bg-gradient-to-b from-transparent to-white">
  <div className="w-full max-w-[35rem] bg-black/30 dark:bg-black dark:border border-[#ACA992] rounded-full">
    <div
      className="h-2 bg-blue-500 dark:bg-[#ACA992] rounded-full"
      style={{ width: `${progress}%` }}
    />
  </div>
</div>

  );
}
