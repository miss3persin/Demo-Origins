'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon
} from '@heroicons/react/24/solid'
import { db } from '/firebase'
import { collection, getDocs, query, orderBy } from 'firebase/firestore'

export const AltSidebar = ({ position = 'fixed' }) => { // Accept position prop with default value as 'fixed'

  const [collapsed, setCollapsed] = useState(true)
  const [chapters, setChapters] = useState([])
  const [isLoading, setIsLoading] = useState(true) // Loading state

  useEffect(() => {
    const fetchChapters = async () => {
      try {
        const chaptersCollection = collection(db, 'chapters')

        // Add 'orderBy' to sort by the 'order' field
        const chaptersQuery = query(chaptersCollection, orderBy('order', 'asc'))

        const chapterSnapshot = await getDocs(chaptersQuery)
        const chapterList = chapterSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        setChapters(chapterList)
      } catch (error) {
        console.error('Error fetching chapters:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchChapters()
  }, [])

  return (
    <div className={`${position === 'fixed' ? 'fixed bottom-0' : 'static'} w-full md:hidden md:relative`}>
      <aside
        className={`
          ${collapsed ? 'h-16' : 'h-24'} 
          w-full ${position === 'fixed' ? 'fixed bottom-0' : 'static'} bg-white dark:bg-black shadow-lg border-t dark:border-[#ACA992] overflow-x-auto flex items-center justify-start transition-all duration-300 ease-out
        `}
      >
        <button
          className='flex-shrink-0 p-2 text-gray-700 dark:text-[#ACA992]'
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? (
            <ChevronDoubleRightIcon className='h-6 w-6' />
          ) : (
            <ChevronDoubleLeftIcon className='h-6 w-6' />
          )}
        </button>

        {isLoading ? ( // Show loader while fetching data
          <div className='flex items-center justify-center w-full'>
            <div
              role='status'
              className='flex flex-col items-center justify-center gap-10'
            >
              <svg
                aria-hidden='true'
                class='h-10 w-28 animate-spin fill-blue-600 text-gray-200 dark:fill-[#ACA992] dark:text-gray-600'
                viewBox='0 0 100 101'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                  fill='currentColor'
                />
                <path
                  d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                  fill='currentFill'
                />
              </svg>
              <span class='sr-only'>Loading...</span>
            </div>
          </div>
        ) : (
          <ul className='flex space-x-2 p-2'>
            {chapters.map(chapter => (
              <li key={chapter.id} className='flex-shrink-0'>
                <Link href={`/chapters/${chapter.id}`}>
                  <p className='block rounded p-2 m-0 text-sm xl:text-sm 2xl:text-lg text-gray-900 hover:bg-gray-200 dark:text-[#ACA992] dark:hover:bg-[#aca99231]'>
                    {collapsed ? (
                      <span className='flex items-center justify-center'>
                        {chapter.id}
                      </span> // Show only ID in collapsed state
                    ) : (
                      <span>{chapter.title}</span> // Show title when expanded
                    )}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </aside>
    </div>
  )
}
