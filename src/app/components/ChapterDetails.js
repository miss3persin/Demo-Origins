'use client'

import React from 'react'
import { useParams, useRouter } from 'next/navigation'
import ChapterContent from './ChapterContent'
import ProgressBar from './ProgressBar'
import BookmarkButton from './BookmarkButton'
// import Comments from './Comments';
import Header from './Header'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css' // Import the styles
import { Footer } from './Footer'

const formatDate = timestampOrDate => {
  if (!timestampOrDate) return 'Date not available';

  let date;
  
  // Check if the object has `seconds` and `nanoseconds`, typical of Firestore Timestamps
  if (timestampOrDate.seconds && timestampOrDate.nanoseconds) {
    date = new Date(timestampOrDate.seconds * 1000 + timestampOrDate.nanoseconds / 1000000);
  } else if (typeof timestampOrDate.toDate === 'function') {
    date = timestampOrDate.toDate(); // Handle Firestore `Timestamp` objects
  } else {
    date = new Date(timestampOrDate); // Assume it's a JS Date or string
  }

  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};


const ChapterDetails = ({
  chapterId,
  chapter,
  prevChapterId,
  nextChapterId
}) => {
  // const { id } = useParams();
  const router = useRouter()

  // Log to ensure createdAt is a Firestore Timestamp
  // console.log('Chapter createdAt:', chapter.createdAt)
  // console.log('Chapter details:', chapter); 

  console.log('Next Chapter ID:', nextChapterId);


  return (
    <>
      <Header title={chapter.title} fixed={true} />
      <div className='relative flex-grow pb-20 pt-28'>
        <div className='mb-10 mt-8 flex justify-center gap-10'>
          {prevChapterId && (
            <button
              onClick={() => router.push(`/chapters/${prevChapterId}`)}
              className='flex items-center sm:text-sm md:text-sm lg:text-lg xl:text-xl 2xl:text-3xl text-xs justify-center gap-3 rounded border border-blue-500 bg-blue-500 px-4 py-2 text-white transition-all duration-200 ease-in-out hover:bg-transparent hover:text-black dark:border-[#ACA992] dark:bg-transparent dark:text-[#ACA992] dark:hover:bg-[#ACA992] dark:hover:text-black'
            >
              <ChevronLeftIcon className='hidden md:flex md:h-4 md:w-5 lg:h-5 lg:w-6 2xl:h-7 2xl:w-6' />
              Previous Chapter
            </button>
          )}
          {nextChapterId && (
            <button
              onClick={() => router.push(`/chapters/${nextChapterId}`)}
              className='flex items-center sm:text-sm md:text-sm lg:text-lg xl:text-xl 2xl:text-3xl text-xs justify-center gap-3 rounded border border-blue-500 bg-blue-500 px-4 py-2 text-white transition-all duration-200 ease-in-out hover:bg-transparent hover:text-black dark:border-[#ACA992] dark:bg-transparent dark:text-[#ACA992] dark:hover:bg-[#ACA992] dark:hover:text-black'
            >
              Next Chapter
              <ChevronRightIcon className='hidden md:flex md:h-4 md:w-5 lg:h-5 lg:w-6 2xl:h-7 2xl:w-6' />
            </button>
          )}
        </div>

        <ProgressBar chapterId={chapterId} />
        <ChapterContent content={chapter.content} />
        <p className='my-28 flex items-center justify-center text-lg flex-col text-gray-900 dark:text-[#ACA992]'>
          End of Current Chapter. <br/> <span className='mt-5 opacity-50'> Uploaded on:{' '}
          {chapter.createdAt
            ? formatDate(chapter.createdAt)
            : 'Date not available'}{' '}
            </span>
        </p>
        <BookmarkButton chapterId={chapterId} />

        <div className='my-8 flex justify-center gap-10'>
          {prevChapterId && (
            <button
              onClick={() => router.push(`/chapters/${prevChapterId}`)}
              className='sm:text-sm md:text-sm lg:text-lg xl:text-xl 2xl:text-3xl text-xs flex items-center justify-center gap-3 rounded border border-blue-500 bg-blue-500 px-4 py-2 text-white transition-all duration-200 ease-in-out hover:bg-transparent hover:text-black dark:border-[#ACA992] dark:bg-transparent dark:text-[#ACA992] dark:hover:bg-[#ACA992] dark:hover:text-black'
            >
              <ChevronLeftIcon className='hidden md:flex md:h-4 md:w-5 lg:h-5 lg:w-6 2xl:h-7 2xl:w-6' />
              Previous Chapter
            </button>
          )}
          {nextChapterId && (
            <button
              onClick={() => router.push(`/chapters/${nextChapterId}`)}
              className='flex items-center sm:text-sm md:text-sm lg:text-lg xl:text-xl 2xl:text-3xl text-xs justify-center gap-3 rounded border border-blue-500 bg-blue-500 px-4 py-2 text-white transition-all duration-200 ease-in-out hover:bg-transparent hover:text-black dark:border-[#ACA992] dark:bg-transparent dark:text-[#ACA992] dark:hover:bg-[#ACA992] dark:hover:text-black'
            >
              Next Chapter
              <ChevronRightIcon className='hidden md:flex md:h-4 md:w-5 lg:h-5 lg:w-6 2xl:h-7 2xl:w-6' />
            </button>
          )}
        </div>

        {/* <Comments chapterId={chapterId} /> */}
      </div>
      <Footer/>
      <ToastContainer />
    </>
  )
}

export default ChapterDetails
