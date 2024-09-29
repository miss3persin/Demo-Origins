'use client';

import { useState, useEffect } from 'react';

export default function ProgressBar({ chapterId }) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      // Set a buffer of 500px for progress completion
      const bufferDistance = 700;

      // Adjust the total scrollable distance by subtracting bufferDistance
      const adjustedScrollableHeight = scrollHeight - clientHeight - bufferDistance;

      // Calculate progress based on adjusted scrollable height
      const newProgress = (scrollTop / adjustedScrollableHeight) * 100;

      // Ensure progress does not exceed 100%
      setProgress(Math.min(newProgress, 100));

      // Set the visibility of the progress bar, disappear if 450px from the bottom
      const distanceFromBottom = scrollHeight - scrollTop - clientHeight;
      setIsVisible(distanceFromBottom > 650);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed h-20 bottom-0 left-0 right-0 z-40 flex items-center justify-center dark:bg-gradient-to-b dark:from-transparent dark:to-black bg-gradient-to-b from-transparent to-white transition-opacity duration-500 ${
        isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="w-full max-w-52 sm:max-w-64 md:max-w-72 h-1 lg:h-2 lg:max-w-96 xl:max-w-[35rem] bg-black/30 dark:bg-black dark:border border-[#ACA992] rounded-full">
        <div
          className="h-1 dark:h-[0.1rem] lg:h-2 dark:lg:h-[0.4rem] bg-blue-500 dark:bg-[#ACA992] rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
