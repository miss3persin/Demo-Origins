'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid' // Import the icons

export default function Header({ title = '', fixed = false }) {
  const [darkMode, setDarkMode] = useState(false)
  const [scrollDirection, setScrollDirection] = useState('up')
  const [lastScrollY, setLastScrollY] = useState(0)
  const router = useRouter()

  useEffect(() => {
    const storedPreference = localStorage.getItem('theme')
    if (storedPreference === 'dark') {
      setDarkMode(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    if (newDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  // Handle scroll behavior only if fixed prop is passed
  useEffect(() => {
    if (fixed) {
      const handleScroll = () => {
        const currentScrollY = window.scrollY

        if (currentScrollY > lastScrollY) {
          setScrollDirection('down')
        } else {
          setScrollDirection('up')
        }

        setLastScrollY(currentScrollY)
      }

      window.addEventListener('scroll', handleScroll)

      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [fixed, lastScrollY])

  return (
    <header
      className={`${
        fixed
          ? 'fixed left-0 right-0 top-0 z-50 px-20 transition-transform duration-300'
          : 'static px-10'
      } flex items-center justify-between border-[#ACA992] bg-white py-4 shadow-md dark:border-b dark:bg-black ${
        fixed && scrollDirection === 'down'
          ? '-translate-y-full'
          : 'translate-y-0'
      }`}
    >
      <div
        className='flex cursor-pointer items-center'
        onClick={() => router.push('/')}
      >
        <img
          src='/author-profile.jpg'
          alt='Author'
          className='h-12 w-12 rounded-full'
        />
        <div className='ml-4'>
          <h1 className='text-2xl font-bold text-gray-900 dark:text-[#ACA992]'>
            Demo Origins
          </h1>
          <p className='m-0 p-0 text-sm text-gray-900 dark:text-[#ACA992]'>
            By miss3persin
          </p>
        </div>
      </div>

      {title && (
        <div className='flex h-16 w-[30rem] items-center justify-center overflow-hidden'>
          <p className='m-0 text-ellipsis whitespace-normal p-0 text-center text-xl font-bold leading-tight text-gray-900 dark:text-[#ACA992]'>
            {title}
          </p>
        </div>
      )}

      <div className='flex items-center space-x-4'>
        <a
          href='https://buymeacoffee.com/miss3persin'
          target='_blank'
          rel='noopener noreferrer'
          className='rounded border sm:text-sm md:text-sm lg:text-lg xl:text-xl 2xl:text-3xl text-xs border-blue-500 bg-blue-500 px-4 py-2 text-white transition-all duration-200 ease-in-out hover:bg-transparent hover:text-black dark:border-[#ACA992] dark:bg-transparent dark:text-[#ACA992] dark:hover:bg-[#ACA992] dark:hover:text-black'
        >
          Buy Me a Coffee
        </a>
        <a
          href='https://dynamic.webnovel.com/download'
          target='_blank'
          rel='noopener noreferrer'
          className='rounded border sm:text-sm md:text-sm lg:text-lg xl:text-xl 2xl:text-3xl text-xs border-blue-500 bg-blue-500 px-4 py-2 text-white transition-all duration-200 ease-in-out hover:bg-transparent hover:text-black dark:border-[#ACA992] dark:bg-transparent dark:text-[#ACA992] dark:hover:bg-[#ACA992] dark:hover:text-black'
        >
          Read on App
        </a>
        <button
          onClick={toggleDarkMode}
          className='rounded bg-transparent text-base py-2 pl-4 text-gray-700 dark:text-white'
        >
          {darkMode ? (
            <SunIcon className='h-7 w-7 text-[#ACA992]' /> // SunIcon for dark mode
          ) : (
            <MoonIcon className='h-7 w-7 text-gray-900' /> // MoonIcon for light mode
          )}
        </button>
      </div>
    </header>
  )
}
