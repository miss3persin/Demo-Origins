'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import {
  MoonIcon,
  SunIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/solid' // Import the icons

export default function Header({ title = '', fixed = false }) {
  const [darkMode, setDarkMode] = useState(false)
  const [scrollDirection, setScrollDirection] = useState('up')
  const [lastScrollY, setLastScrollY] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false) // State for hamburger menu
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

  useEffect(() => {
    const handleOutsideClick = (e) => {
      const menuElement = document.querySelector('.menu');
      const toggleElement = document.querySelector('.menu-toggle');
  
      if (
        menuOpen &&
        menuElement &&
        !menuElement.contains(e.target) &&
        !toggleElement.contains(e.target) // Ensure the toggle button doesn't trigger the close
      ) {
        setMenuOpen(false);
      }
    };
  
    if (menuOpen) {
      window.addEventListener('click', handleOutsideClick);
    } else {
      window.removeEventListener('click', handleOutsideClick);
    }
  
    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, [menuOpen]);
  

  return (
    <header
      className={`${
        fixed
          ? 'fixed left-0 right-0 top-0 z-50 px-3 sm:px-10 transition-transform duration-300 lg:px-14 xl:px-20'
          : 'static px-5 sm:px-10'
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
          src='/pfp.png'
          alt='Author'
          className='h-12 w-12 rounded-full'
        />
        <div className='ml-2 sm:ml-4 hidden return-text sm:block'>
          <h1 className='font-bold text-gray-900 dark:text-[#ACA992] md:text-lg lg:text-2xl'>
            Demo Origins
          </h1>
          <p className='m-0 p-0 text-gray-900 dark:text-[#ACA992] text-xs lg:text-sm'>
            By miss3persin
          </p>
        </div>
      </div>

      {title && (
        <div className='flex h-12 w-52 sm:w-72 items-center justify-center overflow-hidden px-5 lg:h-16 lg:w-80 xl:w-[30rem]'>
          <p className='m-0 text-ellipsis whitespace-normal p-0 text-center font-bold leading-tight text-gray-900 dark:text-[#ACA992] md:text-base lg:text-lg xl:text-xl'>
            {title}
          </p>
        </div>
      )}

      {/* Hamburger menu button visible on small screens */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className='hamburger-btn menu-toggle relative z-50 flex h-8 w-8 flex-col items-center justify-center lg:hidden'
      >
        <span
          className={`block h-0.5 w-6 bg-gray-900 transition-transform duration-300 ease-in-out dark:bg-[#ACA992] ${
            menuOpen ? 'translate-y-1 rotate-45' : '-translate-y-1'
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-gray-900 transition-opacity duration-300 ease-in-out dark:bg-[#ACA992] ${
            menuOpen ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-gray-900 transition-transform duration-300 ease-in-out dark:bg-[#ACA992] ${
            menuOpen ? '-translate-y-0 -rotate-45' : 'translate-y-1'
          }`}
        />
      </button>

      {/* Menu for larger screens, hidden on small screens */}
      <div className='hidden items-center space-x-2 lg:flex lg:space-x-4'>
        <a
          href='https://buymeacoffee.com/miss3persin'
          target='_blank'
          rel='noopener noreferrer'
          className='rounded border border-blue-500 bg-blue-500 px-4 py-2 text-xs text-white transition-all duration-200 ease-in-out hover:bg-transparent hover:text-black dark:border-[#ACA992] dark:bg-transparent dark:text-[#ACA992] dark:hover:bg-[#ACA992] dark:hover:text-black sm:text-sm md:text-sm lg:text-lg 2xl:text-2xl'
        >
          Buy Me a Coffee
        </a>
        {/* <a
          href='https://dynamic.webnovel.com/download'
          target='_blank'
          rel='noopener noreferrer'
          className='rounded border border-blue-500 bg-blue-500 px-4 py-2 text-xs text-white transition-all duration-200 ease-in-out hover:bg-transparent hover:text-black dark:border-[#ACA992] dark:bg-transparent dark:text-[#ACA992] dark:hover:bg-[#ACA992] dark:hover:text-black sm:text-sm md:text-sm lg:text-lg 2xl:text-2xl'
        >
          Read on App
        </a> */}
        <button
          onClick={toggleDarkMode}
          className='rounded bg-transparent py-2 text-base text-gray-700 dark:text-white lg:pl-4'
        >
          {darkMode ? (
            <SunIcon className='h-7 w-7 text-[#ACA992]' /> // SunIcon for dark mode
          ) : (
            <MoonIcon className='h-7 w-7 text-gray-900' /> // MoonIcon for light mode
          )}
        </button>
      </div>

      {/* Mobile menu, visible only when open */}
      {menuOpen && (
  <div className='menu absolute right-0 top-24 z-50 w-full rounded-lg border border-gray-200 bg-white shadow-md dark:border-[#ACA992] dark:bg-black lg:hidden'>
    <a
      href='https://buymeacoffee.com/miss3persin'
      target='_blank'
      rel='noopener noreferrer'
      className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 dark:text-[#ACA992] dark:hover:bg-[#aca99231]'
    >
      Buy Me a Coffee
    </a>
    {/* <a
      href='https://dynamic.webnovel.com/download'
      target='_blank'
      rel='noopener noreferrer'
      className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 dark:text-[#ACA992] dark:hover:bg-[#aca99231]'
    >
      Read on App
    </a> */}
    <button
      onClick={toggleDarkMode}
      className='block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-200 dark:text-[#ACA992] dark:hover:bg-[#aca99231]'
    >
      {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  </div>
)}

    </header>
  )
}
