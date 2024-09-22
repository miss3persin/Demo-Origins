import React from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Image from 'next/image'
import BookmarkManager from './components/BookmarkManager'
import Link from 'next/link';

const page = () => {
  return (
    <div className='flex min-h-screen flex-col bg-gray-100 dark:bg-black sm:flex-row'>
      <Sidebar />
      <div className='flex-grow p-6'>
        <Header />
        <div className='mt-12 flex flex-col items-center text-center'>
          <h1 className='mb-10 text-5xl font-extrabold text-gray-900 dark:text-[#ACA992]'>
            Demo Origins
          </h1>

          <div className='flex gap-6 mb-10 items-center justify-center'>
          <Link href='/chapters/1'>
          <button className="bg-blue-500 transition-all ease-in-out duration-200 hover:bg-transparent hover:text-black dark:bg-transparent dark:text-[#ACA992] border border-blue-500 dark:border-[#ACA992] dark:hover:text-black dark:hover:bg-[#ACA992] text-white px-4 py-2 rounded">
            Start Afresh
          </button>
        </Link>
          <BookmarkManager />
          </div>

          <div className='flex w-96 justify-center overflow-hidden pb-10'>
            <Image
              src='/cover.jpg'
              alt='demo origins'
              layout='intrinsic'
              quality={100}
              width={700}
              height={700}
              objectFit='contain'
              className='h-full w-full object-contain'
            />
          </div>

          <p className='mt-4 mb-10 px-52 text-gray-700 dark:text-[#ACA992]'>
            Locked in a wooden stock, I faced execution by guillotine after a
            heist gone wrong. I braced for the end, but just as the blade was
            about to fall, a shadowy figure appeared out of nowhere and shoved
            an 'orb' into my chest. Then everything went dark.
            <br /> <br /> Confused? So am I. Want to know what happens next?
            Join the club.
          </p>


        </div>  
      </div>
    </div>
  )
}

export default page
