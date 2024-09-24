import React from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Image from 'next/image'
import BookmarkManager from './components/BookmarkManager'
import Link from 'next/link'
import { Footer } from './components/Footer'

const page = () => {
  return (
    <div className='.color-change flex min-h-screen flex-col bg-gray-100 dark:bg-black sm:flex-row'>
      <Sidebar />
      <div className='color-change flex-grow p-6 pb-0'>
        <Header />
        <div className='mt-12 flex flex-col items-center gap-2 text-center'>
          <div className='flex-1'>
            <h1 className='mb-3 text-3xl font-extrabold text-gray-900 dark:text-[#ACA992] lg:text-4xl xl:text-5xl'>
              Demo Origins
            </h1>
            <p className='mb-10 text-xs font-bold text-gray-900 dark:text-[#ACA992] sm:text-sm md:text-sm lg:text-lg 2xl:text-2xl'>
            A High Fantasy Webnovel by miss3persin
            </p>

            <div className='mb-10 flex flex-col items-center justify-center gap-6 sm:flex-row 2xl:flex-col'>
              <Link href='/chapters/1'>
                <button className='rounded border border-blue-500 bg-blue-500 px-4 py-2 text-xs text-white transition-all duration-200 ease-in-out hover:bg-transparent hover:text-black dark:border-[#ACA992] dark:bg-transparent dark:text-[#ACA992] dark:hover:bg-[#ACA992] dark:hover:text-black sm:text-sm md:text-sm lg:text-lg 2xl:text-2xl'>
                  Start from Chapter One
                </button>
              </Link>
              <BookmarkManager />
            </div>
          </div>

          <div className='flex w-full flex-1 flex-col items-center justify-center'>
            <div className='flex w-72 justify-center overflow-hidden pb-10 xl:w-96'>
              <Image
                src='/cover.jpg'
                alt='demo origins by miss3persin'
                layout='responsive' // Use responsive layout to adapt image size dynamically
                width={700} // Original image width
                height={700} // Original image height
                quality={100} // Maintain the best quality
                priority // Ensure the image loads quickly
                objectFit='contain' // Keep aspect ratio and avoid distortion
                className='object-contain'
              />
            </div>

            <div className='mt-4 w-full'>
              <span className='text-center text-lg font-medium text-gray-700 dark:text-[#ACA992]'>
                SYNOPSIS
              </span>
              <p className='mb-20 mt-4 text-justify text-sm text-gray-700 dark:text-[#ACA992] sm:px-[6.5rem] md:px-24 lg:px-20 lg:text-base xl:px-36 2xl:px-52'>
                Locked in a wooden stock, I faced execution by guillotine after
                a heist gone wrong. I braced for the end, but just as the blade
                was about to fall, a shadowy figure appeared out of nowhere and
                shoved an 'orb' into my chest. Then everything went dark.
                <br /> <br /> Confused? So am I. Want to know what happens next?
                Join the club.
              </p>
              <span className='text-center text-lg font-medium text-gray-700 dark:text-[#ACA992]'>
                GENRE
              </span>
              <p className='mb-20 mt-4 text-center text-sm text-gray-700 dark:text-[#ACA992] sm:px-[6.5rem] md:px-24 lg:px-20 lg:text-base xl:px-36 2xl:px-52'>
                ACTION, ADVENTURE, HIGH FANTASY, SYSTEM, WEAK TO STRONG
              </p>
              <span className='text-center text-lg font-medium text-gray-700 dark:text-[#ACA992]'>
                ACKNOWLEDGMENTS
              </span>{' '}
              <p className='mb-10 mt-4 text-justify text-sm text-gray-700 dark:text-[#ACA992] sm:px-[6.5rem] md:px-24 lg:px-20 lg:text-base xl:px-36 2xl:px-52'>
                I would first like to acknowledge God, the ultimate creative. My
                family deserves recognition for nurturing my creativity; without
                them, the novel wouldn’t exist. Thanks to my friends for
                encouraging my creative spirit. I’m grateful to Emmanuel Solomon
                for inspiring the idea that sparked this story. A special
                shoutout to Sokooya Nifemi, the novel’s number one fan, who
                motivated me to keep writing. I appreciate my sister for her
                critical insights and reviews. Finally, thank you to my
                readers—you’re the reason I continue this journey. Whether
                you’re bored, curious, or exploring the novel, your support
                means everything.
              </p>
              <br />
              <br />
              <span className='text-center text-lg font-medium text-gray-700 dark:text-[#ACA992]'>
                **ANNOUNCEMENTS**
              </span>{' '}
              <p className='mb-10 mt-4 text-center text-sm text-gray-700 dark:text-[#ACA992] sm:px-[6.5rem] md:px-24 lg:px-20 lg:text-base xl:px-36 2xl:px-52'>
                - New Chapter Uploads Every Monday by 6PM WAT <br />
                <br />- Dark Mode is Now Available!
              </p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default page
