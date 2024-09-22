'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import ChapterContent from './ChapterContent';
import ProgressBar from './ProgressBar';
import BookmarkButton from './BookmarkButton';
// import Comments from './Comments';
import Header from './Header';
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the styles

const ChapterDetails = ({ chapterId, chapter, prevChapterId, nextChapterId }) => {
  const { id } = useParams();
  const router = useRouter();

  return (
    <>
      <Header title={chapter.title} fixed={true} />
      <div className="flex-grow py-20 relative">
        
        <div className="flex justify-center gap-10 my-8">
          {prevChapterId && (
            <button
              onClick={() => router.push(`/chapters/${prevChapterId}`)}
              className="bg-blue-500 transition-all ease-in-out duration-200 hover:bg-transparent border-blue-500 hover:text-black flex items-center justify-center gap-5 dark:bg-transparent text-white dark:text-[#ACA992] border dark:border-[#ACA992] px-4 py-2 rounded dark:hover:text-black dark:hover:bg-[#ACA992]"
            >
                <ChevronLeftIcon className="h-5 w-6" />
              Previous Chapter
            </button>
          )}
          {nextChapterId && (
            <button
              onClick={() => router.push(`/chapters/${nextChapterId}`)}
              className="bg-blue-500 transition-all ease-in-out duration-200 hover:bg-transparent border-blue-500 hover:text-black flex items-center justify-center gap-5 dark:bg-transparent text-white dark:text-[#ACA992] border dark:border-[#ACA992] px-4 py-2 rounded dark:hover:text-black dark:hover:bg-[#ACA992]"
            >

              Next Chapter
                <ChevronRightIcon className="h-5 w-6" />
            </button>
          )}
        </div>

        <ProgressBar chapterId={chapterId} />
        <ChapterContent content={chapter.content} />
        <BookmarkButton chapterId={chapterId} />

        <div className="flex justify-center gap-10 my-8">
          {prevChapterId && (
            <button
              onClick={() => router.push(`/chapters/${prevChapterId}`)}
              className="bg-blue-500 transition-all ease-in-out duration-200 hover:bg-transparent border-blue-500 hover:text-black flex items-center justify-center gap-5 dark:bg-transparent text-white dark:text-[#ACA992] border dark:border-[#ACA992] px-4 py-2 rounded dark:hover:text-black dark:hover:bg-[#ACA992]"
            >
                <ChevronLeftIcon className="h-5 w-6" />
              Previous Chapter
            </button>
          )}
          {nextChapterId && (
            <button
              onClick={() => router.push(`/chapters/${nextChapterId}`)}
              className="bg-blue-500 transition-all ease-in-out duration-200 hover:bg-transparent border-blue-500 hover:text-black flex items-center justify-center gap-5 dark:bg-transparent text-white dark:text-[#ACA992] border dark:border-[#ACA992] px-4 py-2 rounded dark:hover:text-black dark:hover:bg-[#ACA992]"
            >

              Next Chapter
                <ChevronRightIcon className="h-5 w-6" />
            </button>
          )}
        </div>


        {/* <Comments chapterId={chapterId} /> */}
      </div>
      <ToastContainer />
    </>
  );
};

export default ChapterDetails;
